import { deepStrictEqual } from 'assert';

function twoSum(nums: number[], target: number): number[] {
  let result: [number, number] = [0, 0];
  const hashtable: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];
    const checker: number = target - v;

    if (typeof hashtable[checker] === 'number') {
      result = [hashtable[checker], i];
      break;
    }
    hashtable[v] = i;
  }
  return result;
}

function test_twoSum() {
  try {
    deepStrictEqual(twoSum([2, 3, 6], 5), [0, 1]);

    console.log('All tests Passed!');
  } catch (error) {
    console.error(
      'Error :::',
      `${JSON.stringify((error as any).actual)} !== ${JSON.stringify(
        (error as any).expected,
      )} \n `,
    );
  }
}
export { test_twoSum };
