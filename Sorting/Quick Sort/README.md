# Quick Sort

## Works by picking a value from the array to be a "pivot". Optimally this is chosen at random and swapped with the last item for convenience. We then partition the list such that the pivot is in the middle and all values less than the pivot are to its left and all values greater than the pivot are to its right. This is done recursively (until we only have one element left) using a divide and conquer approach

### Time Complexity
O(n log n) time on average and O(n^2) in worst case

### Space Complexity
O(n) space in worst case, O(1) if sorting the list in-place