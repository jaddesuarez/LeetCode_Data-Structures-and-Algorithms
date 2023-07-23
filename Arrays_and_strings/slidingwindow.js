//Example 1: Given an array of positive integers nums and an integer k, find the length of the longest subarray whose sum is less than or equal to k. 

const findLength = (nums, k) => {
    // Initialize two pointers, 'left'.
    // 'curr' keeps track of the sum of elements in the current subarray.
    // 'ans' will store the maximum length of the subarray found so far.
    let left = 0, curr = 0, ans = 0
    // Loop through the array using the 'right' pointer and add the current element to the 'curr' sum.
    for (let right = 0; right < nums.length; right++) {
        curr += nums[right]
        // If the current sum exceeds 'k', move the 'left' pointer to shrink the window and subtract the element at 'left' from 'curr'.
        while (curr > k) {
            curr -= nums[left]
            left++
        }
        // Update 'ans' with the maximum length found so far.
        ans = Math.max(ans, right - left + 1)
    }
    // Return the maximum length of a subarray whose sum is less than or equal to 'k'.
    return ans
}

// Example 2: You are given a binary substring s(a string containing only "0" and "1").
//An operation involves flipping a "0" into a "1".What is the length of the longest substring containing only "1" after performing at most one operation ?

//For example, given s = "1101100111", the answer is 5. If you perform the flip at index 2, the string becomes 1111100111.

const findLength = (s) => {
    // Initialize two pointers, 'left'.
    // 'curr' keeps track of the sum of elements in the current subarray.
    // 'ans' will store the maximum length of the subarray found so far.
    let left = 0, curr = 0, ans = 0
    // Loop through the string 's' using the 'right' pointer.
    for (let right = 0; right < s.length; right++) {
        // Check if the current character is '0', and if so, increment 'curr'.
        if (s[right] == "0") {
            curr++
        }
        // If the number of '0's in the current subarray exceeds 1,
        // move the 'left' pointer to shrink the window.
        while (curr > 1) {
            if (s[left] == "0") {
                curr -= 1
            }
            left++
        }
        // Update 'ans' with the maximum length found so far.
        ans = Math.max(ans, right - left + 1)
    }
    // Return the maximum length of a contiguous subarray with at most one '0'.
    return ans
}

//Example 3: 713. Subarray Product Less Than K.
//https://leetcode.com/problems/subarray-product-less-than-k/

//Given an array of positive integers nums and an integer k, return the number of subarrays where the product of all the elements in the subarray is strictly less than k.

//For example, given the input nums = [10, 5, 2, 6], k = 100, the answer is 8. The subarrays with products less than k are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]

const numSubarrayProductLessThanK = (nums, k) => {
    // Check if 'k' is less than or equal to 1, in which case no valid subarrays exist.
    if (k <= 1) {
        return 0
    }

    // Initialize two pointers, 'left' and 'right', to track the sliding window.
    // 'ans' will store the maximum length of the subarray found so far.
    let ans = 0, left = 0, curr = 1

    // Loop through the array 'nums' using the 'right' pointer and update 'curr' by multiplying with the current element.
    for (let right = 0; right < nums.length; right++) {
        curr *= nums[right]
        // Shrink the window by moving the 'left' pointer and dividing 'curr' by the element at 'left' if the product becomes greater or equal to 'k'.
        while (curr >= k) {
            curr /= nums[left]
            left++
        }
        // Calculate the number of valid subarrays and update 'ans'.
        ans += right - left + 1
    }
    // Return the number of subarrays whose product is less than 'k'.
    return ans
}

//Example 4: Given an integer array nums and an integer k, find the sum of the subarray with the largest sum whose length is k.

const findBestSubarray = (nums, k) => {
    // 'curr' keeps track of the sum of elements in the current subarray.
    let curr = 0
    // Calculate the initial sum for the first 'k' elements.
    for (let i = 0; i < k; i++) {
        curr += nums[i]
    }
    // 'ans' will store the best subarray sum found so far.
    let ans = curr
    // Iterate through the array from index 'k' and update 'curr' by adding the current element and subtracting the element 'k' positions behind it and 'ans' with the maximum sum found so far.
    for (let i = k; i < nums.length; i++) {
        curr += nums[i] - nums[i - k]
        ans = Math.max(ans, curr)
    }
    // Return the best subarray sum of size 'k'.
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
