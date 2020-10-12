class Solution:
    def minAddToMakeValid(self, S: str) -> int:
        # _l: number of open parentheses are waiting for close ones
        # _r: number of standalone close parentheses
        _l, _r = 0, 0  
        
        for s in S:
            if(s == '('):
                _l += 1    
            else:
                if _l > 0:
                    _l -= 1
                else:
                    _r +=1
            
        return _l + _r 
        