class Solution:
    def partitionLabels(self, S: str) -> List[int]:
        res = []
        while len(S) > 0:
            active_list = {S[0]}
            size = 0
            while 0 < len(active_list):
                target = active_list.pop()
                rindex = S.rindex(target) + 1 
                if  rindex > size:
                    size = rindex
                    active_list.update(list(S[:size]))
            res.append(size)
            S = S[size:]
        return res