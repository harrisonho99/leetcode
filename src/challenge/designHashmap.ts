import { deepStrictEqual } from 'assert';

type mapValue = number[];
type findedOnMap = mapValue | undefined;
class MyHashMap {
  public hashmap: mapValue[] = [];

  private find(key: number): findedOnMap {
    return this.hashmap.find(element => element[0] === key);
  }

  constructor() {}
  put(key: number, value: number): void {
    const mapRef = this.find(key);
    if (typeof mapRef === 'undefined') {
      this.hashmap.push([key, value]);
    } else {
      mapRef[1] = value;
    }
  }

  get(key: number): number {
    let result: number = -1;
    const map = this.find(key);
    if (typeof map === 'undefined') {
      return result;
    } else {
      return map[1];
    }
  }

  remove(key: number): void {
    const replaceHashMap: mapValue[] = [];
    for (let i = 0; i < this.hashmap.length; i++) {
      const mapKey = this.hashmap[i][0];
      const map = this.hashmap[i];
      if (mapKey === key) {
        continue;
      }
      replaceHashMap.push(map);
    }
    this.hashmap = replaceHashMap;
  }
}

function testDesignHashMap(): void {
  try {
    const myHashMap: MyHashMap = new MyHashMap();
    myHashMap.put(1, 1);
    deepStrictEqual(myHashMap.hashmap, [[1, 1]]);
    myHashMap.put(2, 2);
    deepStrictEqual(myHashMap.hashmap, [
      [1, 1],
      [2, 2],
    ]);
    deepStrictEqual(myHashMap.get(1), 1);
    deepStrictEqual(myHashMap.get(3), -1);
    myHashMap.put(2, 1);
    deepStrictEqual(myHashMap.hashmap, [
      [1, 1],
      [2, 1],
    ]);
    deepStrictEqual(myHashMap.get(2), 1);
    myHashMap.remove(2);
    deepStrictEqual(myHashMap.hashmap, [[1, 1]]);
    deepStrictEqual(myHashMap.get(2), -1);

    console.log('All tests Passed!');
  } catch (error) {
    console.error(
      'Error :::',
      `${(error as any).actual} !== ${(error as any).expected} \n `,
    );
  }
}
export { testDesignHashMap };
