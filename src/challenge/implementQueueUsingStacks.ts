import { deepStrictEqual } from 'assert';

class MyQueue {
  private queue: any[] = [];
  constructor() {}

  //## test
  public getQueue() {
    return this.queue;
  }

  push(x: number): void {
    this.queue.push(x);
  }

  pop(): number {
    return this.queue.shift();
  }

  peek(): number {
    return this.queue[0];
  }

  empty(): boolean {
    const len = this.queue.length;
    if (len === 0) {
      return true;
    }
    return false;
  }
}

function test_implementQueueUsingStacks(): void {
  try {
    const myQueue = new MyQueue();
    myQueue.push(1);
    deepStrictEqual(myQueue.getQueue(), [1]);
    myQueue.push(2);
    deepStrictEqual(myQueue.getQueue(), [1, 2]);
    deepStrictEqual(myQueue.peek(), 1);
    deepStrictEqual(myQueue.pop(), 1);
    deepStrictEqual(myQueue.empty(), false);

    console.log('All tests Passed!');
  } catch (error) {
    console.error(
      'Error :::',
      `${(error as any).actual} !== ${(error as any).expected} \n `,
    );
  }
}
export { test_implementQueueUsingStacks };
