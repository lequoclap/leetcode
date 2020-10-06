# line sweep way => time out
# prefer greedy way for better solution

class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        count = 0
        
        list = []
        
        for p in points:
            list.append((p[0], p[1])) #
            list.append((p[1], p[0])) # 1st value is real value, 2nd value is the pair value
        
        list.sort(key = cmp_to_key(lambda a, b: (a[0] - b[0]) if a[0] != b[0] else (b[1] - a[1])))
        
        actived_list = []
        i = 0
        while(i <len(list)):
            p = list[i]
            if(p[0] < p[1]):
                actived_list.append(p)
            else:
                count = count + 1
                for rev in actived_list:
                    list.remove((rev[1], rev[0]))
                
                actived_list = []
                i = i - 1
            i = i + 1
        
        return count