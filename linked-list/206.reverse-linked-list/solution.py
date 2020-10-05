# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        rev = None
        
        while(head):
            if rev == None:
                rev = ListNode(head.val)
            else:
                rev = ListNode(head.val, rev)
            
            head = head.next
        return rev