import { deepStrictEqual } from 'assert';

class RecentCounter {
  private timeLine: number[] = [];
  private readonly timePing: number = 3000;

  public ping(t: number): number {
    this.timeLine.push(t);

    this.timeLine = this.timeLine.filter(element => {
      if (t - element - this.timePing > 0 && t > this.timePing) {
        return false;
      }
      return true;
    });
    return this.timeLine.length;
  }
}

function test_RecentCounter(): void {
  try {
    const recentCounter = new RecentCounter();
    deepStrictEqual(recentCounter.ping(642), 1);
    deepStrictEqual(recentCounter.ping(1849), 2);
    deepStrictEqual(recentCounter.ping(4921), 1);
    deepStrictEqual(recentCounter.ping(5936), 2);
    deepStrictEqual(recentCounter.ping(5957), 3);

    console.log('All tests Passed!');
  } catch (error) {
    console.error(
      'Error :::',
      `${(error as any).actual} !== ${(error as any).expected} \n `,
    );
  }
}
export { test_RecentCounter };
