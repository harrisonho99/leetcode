import { deepStrictEqual } from 'assert';

class MyStack {
  private stack: number[] = [];
  constructor() {}

  push(x: number): void {
    this.stack.push(x);
  }

  pop(): number {
    return this.stack.pop() || 0;
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  empty(): boolean {
    return this.stack.length > 0 ? false : true;
  }
}

function test_implementStackUsingQueues(): void {
  try {
    const myStack = new MyStack();
    myStack.push(1);
    myStack.push(2);
    deepStrictEqual(myStack.top(), 2);
    deepStrictEqual(myStack.pop(), 2);
    deepStrictEqual(myStack.empty(), false);

    console.log('All tests Passed!');
  } catch (error) {
    console.error(
      'Error :::',
      `${(error as any).actual} !== ${(error as any).expected} \n `,
    );
  }
}
export { test_implementStackUsingQueues };
