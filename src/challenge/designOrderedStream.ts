import { deepStrictEqual } from 'assert';
type Chunk = string[];

class OrderedStream {
  private sliceChunk: Chunk;
  private pointer: number = 1;
  constructor(n: number) {
    this.sliceChunk = new Array(n);
  }

  private mapIdToSliceIndex(id: number): number {
    return id - 1;
  }

  insert(idKey: number, value: string): string[] {
    const result: Chunk = [];

    const starterIndex = this.mapIdToSliceIndex(idKey);
    this.sliceChunk[starterIndex] = value;
    if (idKey > this.pointer) {
      return result;
    }

    for (
      let i = this.mapIdToSliceIndex(this.pointer);
      i < this.sliceChunk.length;
      i++
    ) {
      const element = this.sliceChunk[i];
      if (typeof element === 'undefined') {
        this.pointer = i + 1;
        break;
      }
      result.push(element);
    }
    return result;
  }
}

function test_OrderedStream(): void {
  try {
    const orderedStream = new OrderedStream(5);
    deepStrictEqual(orderedStream.insert(3, 'ccccc'), []);
    deepStrictEqual(orderedStream.insert(1, 'aaaaa'), ['aaaaa']);
    deepStrictEqual(orderedStream.insert(2, 'bbbbb'), ['bbbbb', 'ccccc']);
    deepStrictEqual(orderedStream.insert(5, 'eeeee'), []);
    deepStrictEqual(orderedStream.insert(4, 'ddddd'), ['ddddd', 'eeeee']);

    console.log('All tests Passed!');
  } catch (error) {
    console.error(
      'Error :::',
      `${(error as any).actual} !== ${(error as any).expected} \n `,
    );
  }
}
export { test_OrderedStream };
