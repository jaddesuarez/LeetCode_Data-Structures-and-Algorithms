//Example 1: Given an integer array nums, an array queries where queries[i] = [x, y] and an integer limit, 
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

//Example 2: 2270. Number of Ways to Split Array

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

//Exercise 1: Running Sum of 1d Array
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