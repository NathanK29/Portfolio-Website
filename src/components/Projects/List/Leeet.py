test = "([)]"

def isValid(s):
    """
    :type s: str
    :rtype: bool
    """
    parentheses = []

    cpars = ["]", "}", ")"]
    opars = ["[", "{", "("]
    if s[0] in cpars or len(s) % 2 != 0:
        return False
    else:
        for i in range(len(s)):
            thisChar = s[i]
            parentheses.append(thisChar)
            if thisChar in cpars:
                cIndex = cpars.index(thisChar)
                if opars[cIndex] in parentheses[:i]:
                    parentheses.pop(len(parentheses)-1)
                    parentheses.pop(parentheses.index(opars[cIndex]))
                else:
                    return False
        if parentheses == []:
            return True
        return False


    # for i in range(len(s)):
    #     parentheses.append(s[i])
    #     thisChar = parentheses[i]
    #     if i > 1:
    #         cparSelection = ["]", "}", ")"]
    #         oparSelection = ["[", "{", "("]
    #         for e in range(len(cparSelection)):
    #             oPar = oparSelection[e]
    #             cPar = cparSelection[e]
    #             if thisChar == cPar:
    #                 for x in range(i):
    #                     curr = parentheses[x]
    #                     if curr == oPar:
    #                         parentheses.pop(i)
    #                         parentheses.pop(x)
        
print(isValid(test))