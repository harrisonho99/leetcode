import { deepStrictEqual } from 'assert';




type MapKey = number;
type MapValue = number;
type lMap = { key: MapKey; value: MapValue };
type LRUMap = lMap[];

class MyMap {
  //the order [1,2,3]
  private myMap: LRUMap = [];
  private capacity: number;
  private isFull: boolean | null = false;

  private get isMaxSize(): boolean {
    if (Object.keys(this.myMap).length >= this.capacity) return true;
    return false;
  }
  public get getMapValue(): LRUMap {
    return this.myMap;
  }
  constructor(cap: number) {
    this.capacity = cap;
  }

  has(key: number): boolean {
    const mapElement = this.myMap.find(element => element.key === key);
    return typeof mapElement === 'undefined' ? false : true;
  }

  set(key: number, value: number) {
    let mapElementToFirst: lMap | undefined;
    let trackedIndex: number | undefined;
    const filteredMap = this.myMap.filter((element, index) => {
      if (element.key === key) {
        mapElementToFirst = element;
        trackedIndex = index;
        return true;
      }
      return false;
    });


    if (filteredMap.length > 0 && typeof mapElementToFirst !== 'undefined') {
      switch (true) {
        case filteredMap.length < this.capacity &&
          typeof trackedIndex === 'number':
          this.myMap[trackedIndex as number].value = value;
          break;
        default:
          mapElementToFirst.value = value;
          filteredMap.unshift(mapElementToFirst);
          this.myMap = filteredMap;
          break;
      }

      return;
    }

    const item: lMap = { key, value };


    if (this.isMaxSize) {
      switch (this.isFull) {
        case null:
          //remove last element & add first
          this.myMap.pop();
          this.myMap.unshift(item);
          break;
        case true:
          //replace the last element with new element
          this.isFull = null;
          this.myMap[this.capacity -1] = item;
          break;
        default:
          break;
      }
      return;
    }

    // push new element to the start
    this.myMap.unshift(item);
    if (this.myMap.length >= this.capacity) {
      this.isFull = true;
    }
  }

  get(key: number): number {
    const mapElement = this.myMap.find(element => element.key === key);
    return typeof mapElement === 'undefined' ? -1 : mapElement.value;
  }

  get size(): number {
    return this.myMap.length;
  }

  clear(): void {
    this.myMap = [];
  }

  keys(): number[] {
    return this.myMap.map(element => element.key);
  }

  values(): number[] {
    return this.myMap.map(element => element.value);
  }
}

class LRUCache {
  private myMap: MyMap;
  constructor(capacity: number) {
    this.myMap = new MyMap(capacity);
  }

  get getMap(): LRUMap {
    return this.myMap.getMapValue;
  }

  get(key: number): number {
    return this.myMap.get(key);
  }

  put(key: number, value: number): void {
    this.myMap.set(key, value);
  }
}


//////
//////
//////
function test_LRUCache(): void {
  try {
    const lRUCache = new LRUCache(2);

    lRUCache.put(2, 1);

    deepStrictEqual(lRUCache.getMap, [{ key: 2, value: 1 }] as LRUMap);

    lRUCache.put(2, 2);
    deepStrictEqual(lRUCache.getMap, [{ key: 2, value: 2 }] as LRUMap);

    deepStrictEqual(lRUCache.get(2), 2);

    lRUCache.put(1, 1);
    deepStrictEqual(lRUCache.getMap, [
      { key: 1, value: 1 },
      { key: 2, value: 2 },
    ] as LRUMap);

    // deepStrictEqual(lRUCache.get(2), -1);

    lRUCache.put(4, 1);

    deepStrictEqual(lRUCache.getMap, [
      { key: 4, value: 1 },
      { key: 1, value: 1 },
    ] as LRUMap);

    // deepStrictEqual(lRUCache.get(1), -1);
    // deepStrictEqual(lRUCache.get(3), 3);
    // deepStrictEqual(lRUCache.get(4), 4);

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
export { test_LRUCache };
