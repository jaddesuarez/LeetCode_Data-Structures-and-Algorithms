//Example 1: Given a string s, return true if it is a palindrome, false otherwise.

//A string is a palindrome if it reads the same forward as backward. That means, after reversing it, it is still the same string. For example: "abcdcba", or "racecar".

const checkIfPalindrome = (s) => {
    // Initialize two pointers, 'left' and 'right', to point to the start and end of the string.
    let left = 0
    let right = s.length - 1
    // Use a while loop to compare characters from both ends of the string, move 'left' and 'right' pointer to the right towards the center of the string.
    while (left < right) {
        // If characters at 'left' and 'right' pointers are not the same, 's' is not a palindrome.
        if (s[left] != s[right]) {
            return false
        }

        left++
        right--
    }
    // If the while loop completes without returning false, 's' is a palindrome.
    return true
}

//Example 2: Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target, false otherwise. This problem is similar to Two Sum.

//For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.

const checkForTarget = (nums, target) => {
    // Initialize two pointers, 'left' and 'right', to point to the start and end of the array.
    let left = 0
    let right = nums.length - 1

    // Use a while loop to compare elements from both ends of the array.
    while (left < right) {
        // Calculate the sum of elements at 'left' and 'right' pointers.
        let curr = nums[left] + nums[right]
        // If the sum is equal to 'target', we have found the pair.
        if (curr == target) {
            return true
        }
        // If the sum is greater than 'target', move 'right' pointer towards the center. 
        //If the sum is less than 'target', move 'left' pointer towards the center.
        if (curr > target) {
            right--
        } else {
            left++
        }
    }
    // If the while loop completes without finding a pair, return false.
    return false
}

//Example 3: Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted.

const combine = (arr1, arr2) => {
    // 'ans' will store the combined and sorted array.
    let ans = []
    // 'i' will track the current index in 'arr1'.
    // 'j' will track the current index in 'arr2'.
    let i = 0, j = 0
    // Use a while loop to merge the two sorted arrays.
    while (i < arr1.length && j < arr2.length) {
        // If the element in 'arr1' is smaller, add it to 'ans' and move to the next element in 'arr1'.
        // If the element in 'arr2' is smaller or equal, add it to 'ans' and move to the next element in 'arr2'.
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i])
            i++
        } else {
            ans.push(arr2[j]);
            j++
        }
    }
    // If any elements remain in 'arr1', add them to 'ans'.
    while (i < arr1.length) {
        ans.push(arr1[i])
        i++
    }
    // If any elements remain in 'arr2', add them to 'ans'.
    while (j < arr2.length) {
        ans.push(arr2[j])
        j++
    }
    // Return the combined and sorted array 'ans'.
    return ans
}

//Example 4: 392. Is Subsequence.
//https://leetcode.com/problems/is-subsequence/

//Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

//A subsequence of a string is a sequence of characters that can be obtained by deleting some (or none) of the characters from the original string, 
//while maintaining the relative order of the remaining characters. For example, "ace" is a subsequence of "abcde" while "aec" is not.

const isSubsequence = (s, t) => {
    // 'i' will track the current index in 's'.
    // 'j' will track the current index in 't'.
    let i = 0, j = 0
    // Use a while loop to check if 's' is a subsequence of 't' and move to the next character in 't' for each iteration.
    while (i < s.length && j < t.length) {
        // Compare characters at the current positions in 's' and 't', if the characters match, move to the next character in 's'.
        if (s[i] == t[j]) {
            i++
        }

        j++
    }
    // Return true if 'i' is equal to the length of 's', indicating a successful match.
    return i == s.length
}


// --------------- ❕❕❕❕❕ ---------------


//Exercise 1: Reverse String

//Write a function that reverses a string. The input string is given as an array of characters s.

//You must do this by modifying the input array in-place with O(1) extra memory.

const reverseString = (s) => {
    // Initialize two pointers, 'i' and 'j', to point to the start and end of the string.
    let i = 0, j = s.length - 1
    // Use a while loop to compare characters from both ends of the string, move 'left' and 'right' pointer to the right towards the center of the string.
    while (i < j) {
        // Swap the characters at indices 'i' and 'j' using array destructuring.
        [s[i], s[j]] = [s[j], s[i]]
        i++
        j--
    }
    // Return the reversed string.
    return s

}

//Exercise 2: Squares of a Sorted Array

//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

const sortedSquares = (nums) => {
    // Initialize two pointers, 'i' and 'j', to point to the start and end of the array.
    let i = 0
    let j = nums.length - 1
    // 'orderedNumbers' will store the sorted squares.
    const orderedNumbers = []
    // Use a while loop to compare the absolute values of elements from both ends of the array.
    while (i <= j) {
        if (Math.abs(nums[i]) > Math.abs(nums[j])) {
            // If the absolute value at index 'i' is greater, square it and add it to the front of 'orderedNumbers'.
            orderedNumbers.unshift(nums[i] ** 2)
            i++ // Move 'i' to the right towards the center of the array.
        }
        else {
            // If the absolute value at index 'j' is greater or equal, square it and add it to the front of 'orderedNumbers'.
            orderedNumbers.unshift(nums[j] ** 2)
            j-- // Move 'j' to the left towards the center of the array.
        }
    }
    // Return the array 'orderedNumbers', containing the sorted squares of the input numbers.
    return orderedNumbers
}



