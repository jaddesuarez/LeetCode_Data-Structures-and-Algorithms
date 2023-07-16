//Example 1: Given a string s, return true if it is a palindrome, false otherwise.

//A string is a palindrome if it reads the same forward as backward. That means, after reversing it, it is still the same string. For example: "abcdcba", or "racecar".

const checkIfPalindrome = (s) => {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if (s[left] != s[right]) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
}

//Example 2: Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target, false otherwise. This problem is similar to Two Sum.

//For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.

const checkForTarget = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    
    while (left < right) {
        let curr = nums[left] + nums[right];
        if (curr == target) {
            return true
        }
        
        if (curr > target) {
            right--
        } else {
            left++
        }
    }
    
    return false
}

//Example 3: Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted.

const combine = (arr1, arr2) => {
    let ans = []
    let i = 0, j = 0
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i])
            i++
        } else {
            ans.push(arr2[j]);
            j++
        }
    }
    
    while (i < arr1.length) {
        ans.push(arr1[i])
        i++
    }
    
    while (j < arr2.length) {
        ans.push(arr2[j])
        j++
    }
    
    return ans;
}

//Example 4: 392. Is Subsequence.
//https://leetcode.com/problems/is-subsequence/

//Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

//A subsequence of a string is a sequence of characters that can be obtained by deleting some (or none) of the characters from the original string, 
//while maintaining the relative order of the remaining characters. For example, "ace" is a subsequence of "abcde" while "aec" is not.

const isSubsequence = (s, t) => {
    let i = 0, j = 0
    while (i < s.length && j < t.length) {
        if (s[i] == t[j]) {
            i++
        }
        
        j++
    }
    
    return i == s.length
}

