/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummnyHeadStart = new ListNode(0)
    let carry = 0,currentL1 = l1,currentL2= l2, dummyHead =dummnyHeadStart 
    while(currentL1 || currentL2) {
        const currentL1Value = currentL1 ? currentL1.val : 0  , currentL2Value =  currentL2  ? currentL2.val : 0
        const sum = carry + currentL1Value  + currentL2Value 
        carry = Math.floor(sum/10) 
        const newNode =  new ListNode(sum %10)
        dummyHead.next = newNode
        console.log(dummyHead)
        currentL1 = currentL1 && currentL1.next
        currentL2 =  currentL2 && currentL2.next
        dummyHead  =  dummyHead.next
    }
    if(carry > 0) {
      const newNode =  new ListNode(carry)
      dummyHead.next = newNode
    }

    return dummnyHeadStart .next
};