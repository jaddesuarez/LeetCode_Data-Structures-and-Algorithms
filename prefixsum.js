//Example 1: Given an integer array nums, an array queries where queries[i] = [x, y] and an integer limit, 
//return a boolean array that represents the answer to each query. A query is true if the sum of the subarray from x to y is less than limit, or false otherwise.

//For example, given nums = [1, 6, 3, 2, 7, 2], queries = [[0, 3], [2, 5], [2, 4]], and limit = 13, the answer is [true, false, true]. For each query, the subarray sums are [12, 14, 12].
//Test
const answerQueries = (nums, queries, limit) => {
    // Calculate the prefix sum array 'prefix' for the 'nums' array.
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
