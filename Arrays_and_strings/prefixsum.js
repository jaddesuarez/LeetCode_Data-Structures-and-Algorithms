//Example 1: Given an integer array nums, an array queries where queries[i] = [x, y] and an integer limit
//return a boolean array that represents the answer to each query. A query is true if the sum of the subarray from x to y is less than limit, or false otherwise.
//For example, given nums = [1, 6, 3, 2, 7, 2], queries = [[0, 3], [2, 5], [2, 4]], and limit = 13, the answer is [true, false, true]. For each query, the subarray sums are [12, 14, 12].
//Test
const answerQueries = (nums, queries, limit) => {
    // Initiate the prefix sum array 'prefix' for the 'nums' array.
    let prefix = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        // Calculate the cumulative sum for each element and store it in 'prefix'.
        prefix.push(nums[i] + prefix[prefix.length - 1])
    }
    // 'ans' will store the answers for each query
    let ans = []
    // Process each query in 'queries'.
    for (const [x, y] of queries) {
        // Calculate the sum of elements within the given range [x, y].
        let curr = prefix[y] - prefix[x] + nums[x]
        // Check if the calculated sum is less than the 'limit'.
        // If yes, push 'true' to 'ans'; otherwise, push 'false'.
        ans.push(curr < limit)
    }
    // Return the array 'ans' containing the answers to all the queries.
    return ans
}

//Example 2: Number of Ways to Split Array

//https://leetcode.com/problems/number-of-ways-to-split-array/

//Given an integer array nums, find the number of ways to split the array into two parts so that the first section has a sum greater than or equal to the sum of the second section. 
//The second section should have at least one number.

const waysToSplitArray = (nums) => {
    // Get the length of the input array
    let n = nums.length

    // Create an array to store prefix sums
    let prefix = [nums[0]]

    // Calculate prefix sums and store them in the 'prefix' array
    for (let i = 1; i < n; i++) {
        prefix.push(nums[i] + prefix[prefix.length - 1])
    }

    // Initialize a variable to keep track of the count of valid splits
    let ans = 0

    // Loop through the array to find valid splits
    for (let i = 0; i < n - 1; i++) {
        // Calculate the sum of elements in the left section of the split
        let leftSection = prefix[i]

        // Calculate the sum of elements in the right section of the split
        let rightSection = prefix[n - 1] - prefix[i]

        // Check if the left section sum is greater than or equal to the right section sum
        if (leftSection >= rightSection) {
            // If the condition is satisfied, increment the count of valid splits
            ans++
        }
    }

    // Return the total number of valid splits
    return ans
}


// --------------- ❕❕❕❕❕ ---------------


//Exercise 1: Running Sum of 1d Array

//https://leetcode.com/problems/running-sum-of-1d-array/

//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//Return the running sum of nums.

const runningSum = (nums) => {
    // Initiate the prefix sum array 'prefix' for the 'nums' array.
    let prefix = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        // Calculate the cumulative sum for each element and store it in 'prefix'.
        prefix.push(nums[i] + prefix[prefix.length - 1])
    }
    return prefix
}

//Exercise 2: Minimum Value to Get Positive Step by Step Sum

//https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/

// Given an array of integers nums, you start with an initial positive value startValue.
// In each iteration, you calculate the step by step sum of startValue plus elements in nums(from left to right).
// Return the minimum positive value of startValue such that the step by step sum is never less than 1.

const minStartValue = (nums) => {
    // Initialize the starting value to 1
    let startValue = 1
    // Loop until a valid start value is found
    while (true) {
        // Initialize the sum with the current start value
        let sum = startValue
        // Loop through the array 'nums'
        for (let i = 0; i < nums.length; i++) {
            // Add the current element of 'nums' to the sum
            sum += nums[i]
            // If the sum becomes less than 1, break out of the loop
            // and try the next start value
            if (sum < 1) break
            // If we've reached the end of the 'nums' array and the sum is still positive,
            // it means this start value is valid. Return it as the result. 
            if (i === nums.length - 1) return startValue
        }
        // Try the next start value for the next iteration
        startValue++
    }
}

//Exercise 3: K Radius Subarray Averages

// https://leetcode.com/problems/k-radius-subarray-averages/description/

//You are given a 0 - indexed array nums of n integers, and an integer k.
//The k - radius average for a subarray of nums centered at some index i with the radius k is the average of all elements in nums between the indices i - k and i + k(inclusive).If there are less than k elements before or after the index i, then the k - radius average is - 1.
//Build and return an array avgs of length n where avgs[i] is the k - radius average for the subarray centered at index i.
//The average of x elements is the sum of the x elements divided by x, using integer division.The integer division truncates toward zero, which means losing its fractional part.
//For example, the average of four elements 2, 3, 1, and 5 is(2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75, which truncates to 2.

const getAverages = (nums, k) => {
    // Initialize the avgs array with -1
    const avgs = Array(n).fill(-1)
    // Left pointer of the sliding window
    let left = 0
    // Variable to keep track of the sum of elements in the sliding window
    let sum = 0


    for (let right = 0; right < nums.length; right++) {
        // Add the current element to the sum
        sum += nums[right]
        // Check if the sliding window size is equal to k * 2 + 1
        // If so, we have a valid k-radius subarray centered at the current index (right)
        if (right - left + 1 === k * 2 + 1) {
            // Calculate the k-radius average
            const average = Math.floor(sum / (k * 2 + 1))
            // Update the avgs array with the average at the center index
            avgs[right - k] = average
            // Remove the element at the left pointer from the sum
            sum -= nums[left]
            // Move the left pointer to slide the window to the right
            left++
        }
    }
    // Return the array containing k-radius averages
    return avgs
}