#A Simple utility tool to take senstense and match all words passed and return filtered senstences
```sh
const sentences = [
  "test1",
  "test1 test2",
  "test1 test2 test3",
  "test1 test2 test3 test4",
]
```
```sh
console.log(findAllMatches(sentences, "test1 test2"))
```
> ["test1 test2", "test1 test2 test3", "test1 test2 test3 test4"]

// Given in any order
```sh
console.log(findAllMatches(sentences, "test1 test4"))
```
>["test1 test2 test3 test4"]
```sh
console.log(findAllMatches(sentences, "test4 test1"))
```
>["test1 test2 test3 test4"]

## Looking for a particular key in array of object
```sh
const sentences = [
  {
    sentence:" test1"
  },
  {
    sentence:" test1 test2"
  },
  {
    sentence:" test1 test2 test3"
  },
  {
    sentence:" test1 test2 test3 test4"
  }
]
```
```sh
console.log(findAllMatches(sentences,"test4",'sentence'))
```

> [{ sentence:" test1 test2 test3 test4"}]
