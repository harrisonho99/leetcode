import { deepStrictEqual } from 'assert';

class ListNode {
  constructor(public value: number, public next: ListNode | null) {}
}

function reverseList(head: ListNode | null): ListNode | null {
  let prevNode: ListNode | null = null;

  while (head != null) {
    let next = head.next; //next = null , head = 3, prevNode =2
    head.next = prevNode; //next = null , head =3 , prevNode = 2
    prevNode = head; //next = null, head = 3, prevNode = 3
    head = next; // next = null, head = null, prevNode = 3
  }

  return prevNode;
}
function test_reverseLinkedlist(): void {
  try {
    const listnode = new ListNode(1, new ListNode(2, new ListNode(3, null)));
    const passed = new ListNode(3, new ListNode(2, new ListNode(1, null)));
    const result = reverseList(listnode);
    deepStrictEqual(result, passed);
    console.log('All tests Passed!');
  } catch (error) {
    console.error(
      'Error :::',
      `${(error as any).actual} !== ${(error as any).expected} \n `,
    );
  }
}
export { test_reverseLinkedlist };
