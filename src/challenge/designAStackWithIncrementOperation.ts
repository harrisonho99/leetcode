import { AssertionError, deepStrictEqual } from 'assert';

class CustomStack {
  private stack: number[] = [];
  private currentSize: number = 0;
  private maxSize: number = 0;
  constructor(maxSize: number) {
    this.maxSize = maxSize;
  }
  private isMaxSize(): boolean {
    if (this.currentSize < this.maxSize) {
      return false;
    }
    return true;
  }
  //test
  public getStack(): number[] {
    console.log(this.stack);
    return this.stack;
  }

  push(x: number): void {
    if (!this.isMaxSize()) {
      this.stack.push(x);
      this.currentSize++;
    }
  }

  pop(): number {
    if (this.currentSize > 0) {
      const result = this.stack.pop();
      this.currentSize--;
      return typeof result !== 'undefined' ? result : -1;
    }
    return -1;
  }

  increment(k: number, val: number): void {
    for (let i = 0; i < this.stack.length; i++) {
      if (typeof this.stack[i] === 'undefined' || i === k) {
        break;
      }
      this.stack[i] += val;
    }
  }
}

function test_designAStackWithIncrementOperation(): void {
  try {
    const customStack = new CustomStack(3);
    customStack.push(1);
    deepStrictEqual(customStack.getStack(), [1]);
    customStack.push(2);
    deepStrictEqual(customStack.pop(), 2);
    deepStrictEqual(customStack.getStack(), [1]);
    customStack.push(2); // stack becomes [1, 2]
    customStack.push(3); // stack becomes [1, 2, 3]
    customStack.push(4);
    deepStrictEqual(customStack.getStack(), [1, 2, 3]);
    customStack.increment(5, 100);
    deepStrictEqual(customStack.getStack(), [101, 102, 103]);
    customStack.increment(2, 100);
    deepStrictEqual(customStack.getStack(), [201, 202, 103]);
    deepStrictEqual(customStack.pop(), 103);
    deepStrictEqual(customStack.getStack(), [201, 202]);
    deepStrictEqual(customStack.pop(), 202);
    deepStrictEqual(customStack.getStack(), [201]);
    customStack.pop();
    deepStrictEqual(customStack.getStack(), []);
    deepStrictEqual(customStack.pop(), -1);
    console.log('All tests Passed!');
  } catch (error) {
    console.error(
      'Error :::',
      `${(error as any).actual} !== ${(error as any).expected} \n `,
    );
  }
}
export { test_designAStackWithIncrementOperation };
