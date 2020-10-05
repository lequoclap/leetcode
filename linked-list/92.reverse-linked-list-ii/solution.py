# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def reverseBetween(self, head: ListNode, m: int, n: int) -> ListNode:
        i = 0
        rev = None # reversed list
        curr = first = ListNode()
        
        while(head):
            i = i+1
            if i >= m and i <= n:
                if rev == None:
                    rev = ListNode(head.val)
                    revTop = rev
                else:
                    rev = ListNode(head.val, rev)
                if i == n:
                    curr.next = rev
                    curr = revTop
            else:
                obj = ListNode(head.val)
                curr.next = obj
                curr = curr.next
            head = head.next
        return first.next
                
                
            
            
            
            
        