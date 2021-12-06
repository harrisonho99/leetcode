import { deepStrictEqual } from 'assert';
import { runInThisContext } from 'vm';

// class BrowserHistory {
//   private readonly listHistory: Array<string> = [];
//   private currentPageIndex: number = 0;
//   constructor(homepage: string) {
//     this.listHistory.push(homepage);
//   }

//   //test
//   get getCurrentPage(): string {
//     return this.listHistory[this.currentPageIndex];
//   }
//   private get len(): number {
//     return this.listHistory.length;
//   }

//   visit(url: string): void {
//     if (this.currentPageIndex !== this.len - 1) {
//       this.listHistory.splice(this.currentPageIndex + 1);
//     }
//     this.listHistory.push(url);
//     this.currentPageIndex = this.len - 1;
//   }

//   back(steps: number): string {
//     if (this.currentPageIndex === 0) {
//       return this.listHistory[this.currentPageIndex];
//     } else if (steps - this.currentPageIndex > 0) {
//       this.currentPageIndex = 0;
//       return this.listHistory[this.currentPageIndex];
//     }
//     this.currentPageIndex -= steps;
//     return this.listHistory[this.currentPageIndex];
//   }

//   forward(steps: number): string {
//     if (steps > this.len - this.currentPageIndex) {
//       this.currentPageIndex = this.len - 1;
//       return this.listHistory[this.currentPageIndex];
//     } else if (this.currentPageIndex === this.len) {
//       return this.listHistory[this.currentPageIndex];
//     }
//     this.currentPageIndex += steps;
//     return this.listHistory[this.currentPageIndex];
//   }
// }

//Using LinkedList
class PageNode {
  public next: PageNode | null = null;
  public prev: PageNode | null = null;

  constructor(public URL: string) {}
}

class BrowserHistory {
  private currentPage: PageNode;

  constructor(homepage: string) {
    this.currentPage = new PageNode(homepage);
    this.currentPage.next = null;
    this.currentPage.prev = null;
  }

  get getCurrentPage(): string {
    return this.currentPage.URL;
  }
  visit(url: string): void {
    const visitedPage = new PageNode(url);
    visitedPage.prev = this.currentPage;
    visitedPage.next = null;
    this.currentPage.next = visitedPage;
    this.currentPage = visitedPage;
  }

  back(steps: number): string {
    while (steps > 0) {
      steps--;
      if (this.currentPage.prev !== null) {
        this.currentPage = this.currentPage.prev;
      } else {
        break;
      }
    }
    return this.currentPage.URL;
  }

  forward(steps: number): string {
    while (steps > 0) {
      steps--;
      if (this.currentPage.next !== null) {
        this.currentPage = this.currentPage.next;
      } else {
        break;
      }
    }

    return this.currentPage.URL;
  }
}

function test_browserHistory(): void {
  try {
    const browserHistory = new BrowserHistory('leetcode.com');
    browserHistory.visit('google.com');
    deepStrictEqual(browserHistory.getCurrentPage, 'google.com');
    browserHistory.visit('facebook.com');
    deepStrictEqual(browserHistory.getCurrentPage, 'facebook.com');

    browserHistory.visit('youtube.com');
    deepStrictEqual(browserHistory.getCurrentPage, 'youtube.com');
    deepStrictEqual(browserHistory.back(1), 'facebook.com');
    deepStrictEqual(browserHistory.getCurrentPage, 'facebook.com');
    deepStrictEqual(browserHistory.back(1), 'google.com');
    deepStrictEqual(browserHistory.forward(1), 'facebook.com');
    browserHistory.visit('linkedin.com');

    deepStrictEqual(browserHistory.getCurrentPage, 'linkedin.com');
    deepStrictEqual(browserHistory.forward(2), 'linkedin.com');
    deepStrictEqual(browserHistory.back(2), 'google.com');
    deepStrictEqual(browserHistory.back(7), 'leetcode.com');

    console.log('All tests Passed!');
  } catch (error) {
    console.error(
      'Error :::',
      `${(error as any).actual} !== ${(error as any).expected} \n `,
    );
  }
}

export { test_browserHistory };
