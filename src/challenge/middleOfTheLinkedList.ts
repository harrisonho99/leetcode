import { deepStrictEqual } from 'assert';

class ListNode {
  constructor(public val: number, public next: ListNode | null) {}
}

type LN = ListNode | null;

// // native appoach
// function middleNode(head: LN): LN {
//   let pointer1: LN = head;
//   let pointer2: LN = head;
//   let countLengthListNode = 1;
//   while (pointer1 !== null) {
//     if (pointer1.next === null) {
//       break;
//     }
//     countLengthListNode++;
//     pointer1 = pointer1.next;
//   }

//   let halfIndex = countLengthListNode / 2;
//   let midIndex: number =
//     countLengthListNode % 2 === 0 ? halfIndex + 1 : Math.round(halfIndex);

//   let countIndexToMidVal = 1;

//   while (countIndexToMidVal <= midIndex) {
//     if (countIndexToMidVal === midIndex) {
//       head = pointer2;
//       break;
//     }
//     pointer2 = pointer2!.next;
//     countIndexToMidVal++;
//   }

//   return head;
// }

// two-pointer
function middleNode(head: LN): LN {
  let fastPointer = head;
  let slowPointer = head;

  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer!.next;

    head = slowPointer;
  }

  return head;
}

function test_middleOfTheLinkedList(): void {
  try {
    const listnode = new ListNode(1, new ListNode(2, new ListNode(3, null)));
    const passed = new ListNode(2, new ListNode(3, null));
    const result = middleNode(listnode);
    deepStrictEqual(result, passed);
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
export { test_middleOfTheLinkedList };

