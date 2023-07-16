//Example 1: Given an array of positive integers nums and an integer k, find the length of the longest subarray whose sum is less than or equal to k. 

const findLength = (nums, k) => {
    let left = 0, curr = 0, ans = 0
    for (let right = 0; right < nums.length; right++) {
        curr += nums[right]
        while (curr > k) {
            curr -= nums[left]
            left++
        }
        
        ans = Math.max(ans, right - left + 1)
    }
    
    return ans
}

// Example 2: You are given a binary substring s(a string containing only "0" and "1").
//An operation involves flipping a "0" into a "1".What is the length of the longest substring containing only "1" after performing at most one operation ?

//For example, given s = "1101100111", the answer is 5. If you perform the flip at index 2, the string becomes 1111100111.

const findLength = (s) => {
    let left = 0, curr = 0, ans = 0
    for (let right = 0; right < s.length; right++) {
        if (s[right] == "0") {
            curr++
        }
        
        while (curr > 1) {
            if (s[left] == "0") {
                curr -= 1
            }
            left++
        }
        
        ans = Math.max(ans, right - left + 1)
    }
    
    return ans
}

//Example 3: 713. Subarray Product Less Than K.
//https://leetcode.com/problems/subarray-product-less-than-k/

//Given an array of positive integers nums and an integer k, return the number of subarrays where the product of all the elements in the subarray is strictly less than k.

//For example, given the input nums = [10, 5, 2, 6], k = 100, the answer is 8. The subarrays with products less than k are:

//[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]

const numSubarrayProductLessThanK = (nums, k) => {
    if (k <= 1) {
        return 0
    }

    let ans = 0, left = 0, curr = 1
    
    for (let right = 0; right < nums.length; right++) {
        curr *= nums[right]
        while (curr >= k) {
            curr /= nums[left]
            left++
        }
        
        ans += right - left + 1
    }
    
    return ans
}

//Example 4: Given an integer array nums and an integer k, find the sum of the subarray with the largest sum whose length is k.

const findBestSubarray = (nums, k) => {
    let curr = 0
    for (let i = 0; i < k; i++) {
        curr += nums[i]
    }
    
    let ans = curr
    for (let i = k; i < nums.length; i++) {
        curr += nums[i] - nums[i - k]
        ans = Math.max(ans, curr)
    }
    
    return ans
}

//Exercise 1: 643. Maximum Average Subarray I

//https://leetcode.com/problems/maximum-average-subarray-i/

//You are given an integer array nums consisting of n elements, and an integer k.

//Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

const findMaxAverage = (nums, k) => {
    let sum = 0

  // Calculate the initial sum for the first 'k' elements.
  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }

  // Set 'ans' to the initial sum.
  let ans = sum

  // Iterate through the array from index 'k' and update 'sum' and 'ans'.
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k]
    ans = Math.max(ans, sum)
  }

  // Return the maximum average by dividing 'ans' by 'k'.
  return ans / k
}
