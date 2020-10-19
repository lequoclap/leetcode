class Solution:
    def splitIntoFibonacci(self, S: str) -> List[int]:
        return self.subFunction(S, []) or []
        
    def subFunction(self, S, res ):
        if len(S) == 0 and len(res) > 2:
            return res
        
        if(len(res) >= 2):
            curr = int(res[-1]) + int(res[-2])
            if S[0:len(str(curr))] == str(curr) and curr < (2**31 -1):
                new_res = res.copy()
                new_res.append(curr)
                return self.subFunction(S[len(str(curr)):], new_res)
            else:
                return None
        else:
            i = 0
            while i < len(S):
                i += 1
                curr = S[:i]
                if len(curr) >=2 and curr[0:1] == '0':
                    continue
                new_res = res.copy()
                new_res.append(curr)
                tmp = self.subFunction(S[i:], new_res)
                if tmp != None:
                    return tmp
        