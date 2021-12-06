import util from 'util';
import { testDesignHashMap } from './challenge/designHashmap';
import { testParkingSystem } from './challenge/designParkingSystem';
import { test_OrderedStream } from './challenge/designOrderedStream';
import { test_RecentCounter } from './challenge/numberOfRecentCalls';
import { test_implementQueueUsingStacks } from './challenge/implementQueueUsingStacks';
import { test_rangeSumQueryImmutable } from './challenge/rangeSumQuery-Immutable';
import { test_implementStackUsingQueues } from './challenge/implementStackUsingQueues';
import { test_minStack } from './challenge/minStack';
import { test_encodeAndDecodeTinyURL } from './challenge/encodeAndDecodeTinyURL';
import { test_designAStackWithIncrementOperation } from './challenge/designAStackWithIncrementOperation';
import { test_subrectangleQueries } from './challenge/subrectangleQueries';
import { test_browserHistory } from './challenge/designBrowserHistory';
import { test_LRUCache } from './challenge/LRUCache';
import { test_reverseLinkedlist } from './challenge/reverseLinkedlist';
import { test_middleOfTheLinkedList } from './challenge/middleOfTheLinkedList';
import { test_mergeTwoSortedList } from './challenge/mergeTwoSortedList';

main(test_mergeTwoSortedList);

//
//
//

function main(testFunc: Function) {
  util.inspect.defaultOptions.depth = null;
  const func = testFunc;

  const label = func.name;

  console.time(label);

  func();

  console.timeEnd(label);
}
