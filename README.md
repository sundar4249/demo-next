```
Q.no 3

function longestConsecutiveChain(nums) {
    if (nums.length === 0) return 0;
    const numSet = new Set(nums);
    let maxChainLength = 0;
    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentChainLength = 0;
            while (numSet.has(currentNum)) {
                currentChainLength++;
                currentNum++;
            }
            maxChainLength = Math.max(maxChainLength, currentChainLength);
        }
    }

    return maxChainLength;
}


```

Time complexity is defined in terms of how many times it takes to run a given algorithm, based on the length of the input.

space Complexity
When an algorithm is run on a computer, it necessitates a certain amount of memory space. The amount of memory used by a program to execute it is represented by its space complexity.

```
Q.no5

function countSmaller(nums) {
    const n = nums.length;
    const counts = Array(n).fill(0);
    const indexedNums = nums.map((num, index) => [num, index]);

    function mergeSort(arr) {
        if (arr.length <= 1) return arr;

        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));

        return merge(left, right);
    }

    function merge(left, right) {
        let i = 0, j = 0;
        const merged = [];
        const rightCount = Array(n).fill(0);

        while (i < left.length && j < right.length) {
            if (left[i][0] <= right[j][0]) {
                rightCount[left[i][1]] += j;
                merged.push(left[i]);
                i++;
            } else {
                merged.push(right[j]);
                j++;
            }
        }

        while (i < left.length) {
            rightCount[left[i][1]] += j;
            merged.push(left[i]);
            i++;
        }

        while (j < right.length) {
            merged.push(right[j]);
            j++;
        }

        return merged;
    }

    mergeSort(indexedNums);

    return rightCount;
}

```
