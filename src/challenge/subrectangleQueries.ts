import { deepStrictEqual } from 'assert';

class SubrectangleQueries {
  constructor(private rectangle: number[][]) {}

  updateSubrectangle(
    row1: number,
    col1: number,
    row2: number,
    col2: number,
    newValue: number,
  ): void {
    for (let i = 0; i < this.rectangle.length; i++) {
      if (i < row1 || i > row2) {
        continue;
      }

      const row = this.rectangle[i];

      for (let y = 0; y < row.length; y++) {
        if (y < col1 || y > col2) {
          continue;
        }
        this.rectangle[i][y] = newValue;
      }
    }
  }

  //test
  getRec(): number[][] {
    return this.rectangle;
  }

  getValue(row: number, col: number): number {
    return this.rectangle[row][col];
  }
}

function test_subrectangleQueries(): void {
  try {
    const subrectangleQueries = new SubrectangleQueries([
      [1, 2, 1],
      [4, 3, 4],
      [3, 2, 1],
      [1, 1, 1],
    ]);

    deepStrictEqual(subrectangleQueries.getValue(0, 2), 1);
    subrectangleQueries.updateSubrectangle(0, 0, 3, 2, 5);
    deepStrictEqual(subrectangleQueries.getRec(), [
      [5, 5, 5],
      [5, 5, 5],
      [5, 5, 5],
      [5, 5, 5],
    ]);

    deepStrictEqual(subrectangleQueries.getValue(0, 2), 5);
    deepStrictEqual(subrectangleQueries.getValue(3, 1), 5);
    subrectangleQueries.updateSubrectangle(3, 0, 3, 2, 10);
    deepStrictEqual(subrectangleQueries.getRec(), [
      [5, 5, 5],
      [5, 5, 5],
      [5, 5, 5],
      [10, 10, 10],
    ]);
    deepStrictEqual(subrectangleQueries.getValue(3, 1), 10);
    deepStrictEqual(subrectangleQueries.getValue(0, 2), 5);

    console.log('All tests Passed!');
  } catch (error) {
    console.error(
      'Error :::',
      `${(error as any).actual} !== ${(error as any).expected} \n `,
    );
  }
}
export { test_subrectangleQueries };
