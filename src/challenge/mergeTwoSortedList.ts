import { deepStrictEqual } from 'assert';

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (list1 === null) {
    return list1;
  } else if (list2 === null && list1 !== null) {
    return list1;
  } else if (list1 === null && list2 === null) {
    return null;
  }
  let result: ListNode | null;
  let temp: ListNode | null;
  while (temp! !== null) {
    if (list1!.val >= list2!.val) {
      temp = list1;
      temp?.next = mergeTwoLists(list1!.next, list2) {}
    }
  }

  return result;
}

function test_mergeTwoSortedList() {
  try {
    const pass = new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(
          2,
          new ListNode(3, new ListNode(4, new ListNode(4, null))),
        ),
      ),
    );
    const list1 = new ListNode(1, new ListNode(2, new ListNode(3, null)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));

    const result = mergeTwoLists(list1, list2);
    console.log({ result });

    deepStrictEqual(result, pass);

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
export { test_mergeTwoSortedList };
