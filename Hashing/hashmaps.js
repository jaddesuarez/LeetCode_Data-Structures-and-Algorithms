// Declaration: use the Map object
let hashMap01 = new Map()

// If you want to initialize it with some key value pairs, use the following syntax:
let hashMap02 = new Map([
    [1, 2],
    [5, 3],
    [7, 2]
])

// Checking if a key exists: use .has()
hashMap02.has(1) // true
hashMap02.has(9) // false

// Accessing a value given a key: use .get()
hashMap02.get(5) // 3

// Adding or updating a key: use .set()
// If the key already exists, the value will be updated
hashMap02.set(5, 6)

// If the key doesn't exist yet, the key value pair will be inserted
hashMap02.set(9, 15)

// Deleting a key: use .delete()
hashMap02.delete(9)

// Get size
hashMap02.size // 3

// Iterate over the key value pairs: use the following code
for (const [key, value] of hashMap02) {
    console.log(key + " " + value)
}

// --------------- ❕❕❕❕❕ ---------------

// Example 1: Two Sum

// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1: Input: nums = [2, 7, 11, 15], target = 9 - Output: [0, 1] - Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2: Input: nums = [3,2,4], target = 6 - Output: [1, 2]
// Example 3: Input: nums = [3,3], target = 6 - Output: [0, 1]


const twoSum = (nums, target) => {
    const map = new Map()
    // Store the first number in the Map with its index
    map.set(nums[0], 0)
    // Loop through the array starting from the second element
    for (let i = 0; i < nums.length; i++) {
        // Check if the target - nums[i] exists in the Map
        // If it exists, return the indices of the two numbers that add up to the target
        if (map.has(target - nums[i])) return [map.get(target - nums[i]), i]
        else {
            // If the complement does not exist in the Map, store the current number with its index
            map.set(nums[i], i)
        }
    }
    // If no pair of numbers is found, return -1
    return -1
}

// Example 2: First Letter to Appear Twice

// https://leetcode.com/problems/first-letter-to-appear-twice/

// Given a string s consisting of lowercase English letters, return the first letter to appear twice.
// Note: A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b. s will contain at least one letter that appears twice.

const repeatedCharacter = (s) => {
    let seen = new Set()
    // Loop through each character (c) in the string
    for (const c of s) {
        // If the character is already in the Set, it's a repeated character, so return it
        if (seen.has(c)) {
            return c
        }
        // Add the character to the Set to keep track of seen characters
        seen.add(c)
    }
    // If no repeated character is found, return an empty string
    return " "
}

// Example 3: Given an integer array nums, find all the numbers x that satisfy the following: x + 1 is not in nums, and x - 1 is not in nums.

const findNumbers = (nums) => {
    // Initialize an empty array to store the numbers that satisfy the condition
    let ans = []
    // Create a Set from the input array to enable quick lookups
    let numsSet = new Set(nums)
    // Loop through each number (num) in the array
    for (const num of nums) {
        // Check if neither num + 1 nor num - 1 exists in the numsSet, then add num to the ans array
        if (!numsSet.has(num + 1) && !numsSet.has(num - 1)) {
            ans.push(num)
        }
    }
    // Return the array containing numbers that meet the condition
    return ans
}

// Exercise 1: Check if the Sentence Is Pangram

// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

// A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

// Example 1: Input: sentence = "thequickbrownfoxjumpsoverthelazydog" - Output: true - Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2: Input: sentence = "leetcode" - Output: false

const checkIfPangram = (sentence) => {
    // If the sentence length is less than 26, it cannot be a pangram.
    if (sentence.length < 26) return false
    // Convert the sentence into a Set of unique characters
    // Check if the size of the Set is equal to 26
    // Since Set() can only store unique values, 26 unique letters will fall into it and return true
    // Otherwise, if there are less than 26 unique letters it will return false
    return new Set(sentence.split("")).size === 26
}

// Exercise 2: Missing Number

// https://leetcode.com/problems/missing-number/

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1: Input: nums = [3,0,1] - Output: 2 - Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2: Input: nums = [0,1] - Output: 2 - Explanation: n = 2 since there are 2 numbers, so all numbers are in the range[0, 2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3: Input: nums = [9,6,4,2,3,5,7,0,1] - Output: 8 - Explanation: n = 9 since there are 9 numbers, so all numbers are in the range[0, 9]. 8 is the missing number in the range since it does not appear in nums.

const missingNumber = (nums) => {
    // Create a Set to store unique numbers from the input array
    const numbersRange = new Set(nums)
    // Initialize a variable to track the index while searching for the missing number
    let index = 0
    // Use a while loop to keep searching for the missing number
    while (true) {
        // Check if the current index is not present in the numbersRange Set
        // If the index is missing, it is the missing number, so return it
        if (!numbersRange.has(index)) return index
        // Increment the index to continue searching
        index++
    }
}


// Exercise 3: Counting Elements

// https://leetcode.com/problems/counting-elements/

// Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.

// Example 1: Input: arr = [1,2,3] - Output: 2 - Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
// Example 2: Input: arr = [1,1,3,3,5,5,7,7] - Output: 0 -  Explanation: No numbers are counted, cause there is no 2, 4, 6, or 8 in arr.

const countElements = (nums) => {
    // Initialize a counter to keep track of the elements that satisfy the condition
    let count = 0
    // Create a Set to store unique numbers from the nums array
    const numbers = new Set(nums)
    // Loop through each number (number) in the nums array
    for (const number of nums) {
        // If (number + 1) exists in the Set, increment the counter.
        if (numbers.has(number + 1)) count++
    }
    // Return the count of elements that have (number + 1) in the nums array
    return count
}

