const sentences = [
  "test1",
  "test1 test2",
  "test1 test2 test3",
  "test1 test2 test3 test4",
]

export default findAllMatches(sentences, inputSearchSting) {
  var searchString = inputSearchSting.split(' ')// ["test1","test2", . . .]
  
  var regExString = '^'
  //Building RegEx String based on inputSearchSting
  searchString.forEach(eachWord => {
    regExString += '(?=.*\\b' + eachWord + '\\b)' // A double backslach to escape single slash
  })

  regExString = regExString + '.*$' //"==> ^(?=.*\\btest1\\b)(?=.*\\btest2\\b).*$"
  var regEx = new RegExp(regExString, "g")

  var matches = sentences.filter(eachSentence => {
    //console.log(eachSentence.match(regEx))
    return eachSentence.match(regEx) != null
  })
  return matches
}

//Test Cases

console.log(findAllMatches(sentences, "test1"))
//["test1", "test1 test2", "test1 test2 test3", "test1 test2 test3 test4"]
console.log(findAllMatches(sentences, "test1 test2"))
// ["test1 test2", "test1 test2 test3", "test1 test2 test3 test4"]

// Given in any order
console.log(findAllMatches(sentences, "test1 test4"))
//["test1 test2 test3 test4"]
console.log(findAllMatches(sentences, "test4 test1"))
//["test1 test2 test3 test4"]
