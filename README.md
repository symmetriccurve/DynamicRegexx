# DynamicRegex
Dynamic Regex to Match Words in a Sentence given in any order 


console.log(findAllMatches(sentences, "test1"))

//["test1", "test1 test2", "test1 test2 test3", "test1 test2 test3 test4"]

console.log(findAllMatches(sentences, "test1 test2"))
//["test1 test2", "test1 test2 test3", "test1 test2 test3 test4"]

// Given in any order
console.log(findAllMatches(sentences, "test1 test4"))
//["test1 test2 test3 test4"]

console.log(findAllMatches(sentences, "test4 test1"))
//["test1 test2 test3 test4"]
