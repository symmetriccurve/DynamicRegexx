export default function(sentences, inputSearchSting, key) {
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
    if(key) return eachSentence[key].toLowerCase().match(regEx) != null
    return eachSentence.toLowerCase().match(regEx) != null
  })
  return matches
}
