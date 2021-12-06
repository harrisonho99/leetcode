import { deepStrictEqual } from 'assert';

class MinStack {
  private stack: number[] = [];
  private minVal: number = 2e31;
  constructor() {}

  push(val: number): void {
    this.stack.push(val);
    if (val < this.minVal) {
      this.minVal = val;
    }
  }

  pop(): void {
    const popVal = this.stack.pop();
    if (typeof popVal === 'number' && popVal === this.minVal) {
      let min = 2e31;
      for (let i = 0; i < this.stack.length; i++) {
        const element = this.stack[i];
        if (element < min) {
          min = element;
        }
      }
      this.minVal = min;
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minVal;
  }
}

function test_minStack(): void {
  try {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    deepStrictEqual(minStack.getMin(), -3);
    minStack.pop();
    deepStrictEqual(minStack.top(), 0);
    deepStrictEqual(minStack.getMin(), -2);

    console.log('All tests Passed!');
  } catch (error) {
    console.error(
      'Error :::',
      `${(error as any).actual} !== ${(error as any).expected} \n `,
    );
  }
}
export { test_minStack };
