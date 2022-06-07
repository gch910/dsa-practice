def binary_search(arr, low, high, k):
    #this is important - low and high could be same number and we may need to go this far to get correct value
    #cannot set this to low >= high because we will not check last value of array section (of size 1)
    if low > high:
        return False
    
    mid = (low + high) // 2
    if arr[mid] == k:
        return True
    elif arr[mid] > k:
        high = mid - 1
        #important to return here (returns next call in stack so that return value of true or false can bubble up)
        return binary_search(arr, low, high, k) #first call waiting on this return val return from third call bubbles up as true
    elif arr[mid] < k:
        low = mid + 1
        return binary_search(arr, low, high, k) #second call ^^ is waiting on this reutrn value -- return is true -- bubbles
    
  
    
lst = [2, 7, 9, 67, 104, 308, 956]
test = binary_search(lst, 0, len(lst) - 1, 9)

print(test)