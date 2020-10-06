class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        if(len(points) == 0):
            return 0
        count = 0
        points.sort()
        min_e = points[0][1]
        
        for s, e in points:            
            if(s > min_e):
                count = count + 1
                min_e = e
            min_e = min(min_e, e)
        return count + 1 # plus the last one