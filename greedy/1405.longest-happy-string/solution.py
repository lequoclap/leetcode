# 1. sort list characters
# 2. get the most remaining character, if it makes the result becomes to unhappy get the 2nd most remaining character.
# 3. recount the number of character we just picked and reset the list
# 4. repeat and break when we found out the character we need is empty 

class Solution:
    def longestDiverseString(self, a: int, b: int, c: int) -> str:
        res = ''
        characters = [('a', a), ('b', b), ('c', c)]
        while True:
            characters.sort(key = lambda x: x[1])
            set = characters[2] # get the most characters
            c = set[0]
            if len(res) >= 2 and res[-1] == c and res[-2] == c:
                set = characters[1] # get the next most character
            if set[1] == 0:
                break
            c = set[0]
            res += c
            characters.remove(set)
            set = (set[0], set[1] -1)
            characters.append(set)
        
        return res
        
        