//Example 1: Given an integer array nums, an array queries where queries[i] = [x, y] and an integer limit, 
//return a boolean array that represents the answer to each query. A query is true if the sum of the subarray from x to y is less than limit, or false otherwise.

//For example, given nums = [1, 6, 3, 2, 7, 2], queries = [[0, 3], [2, 5], [2, 4]], and limit = 13, the answer is [true, false, true]. For each query, the subarray sums are [12, 14, 12].

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
