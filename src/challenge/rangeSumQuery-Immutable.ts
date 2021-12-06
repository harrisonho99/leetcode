import { deepStrictEqual } from 'assert';

class NumArray {
  private listNums: number[];
  constructor(nums: number[]) {
    this.listNums = nums;
  }

  sumRange(left: number, right: number): number {
    let total: number = 0;
    for (let i = left; i <= right; i++) {
      const element = this.listNums[i];
      total += element;
    }
    return total
  }
}

function test_rangeSumQueryImmutable(): void {
  try {
    const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
    deepStrictEqual(numArray.sumRange(0, 2), 1);
    deepStrictEqual(numArray.sumRange(2, 5), -1);
    deepStrictEqual(numArray.sumRange(0, 5), -3);

    console.log('All tests Passed!');
  } catch (error) {
    console.error(
      'Error :::',
      `${(error as any).actual} !== ${(error as any).expected} \n `,
    );
  }
}
export { test_rangeSumQueryImmutable };
