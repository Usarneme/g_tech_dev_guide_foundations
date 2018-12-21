// Given a string S and a set of words D, find the longest word in D that is a subsequence of S.
// For example, given the input of 
// S = "abppplee" and 
// D = {"able", "ale", "apple", "bale", "kangaroo"}
// the correct output would be "apple"

export default function longestSubsequence(string, dictionary) {
  const stringLength = string.length
  let sequence = ''
  // loop through each of the dictionary words
  Object.keys(dictionary).map(word => {
    console.log('Reviewing',word)
    // escape immediately on words that are longer than the string as they can't be subsequences
    if (word.length > stringLength) return
    
  })

  return sequence
}