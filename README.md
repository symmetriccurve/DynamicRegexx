# A Simple utility tool to take senstense and match all words passed and return filtered senstences

```sh
  const sentences = [
  "test1",
  "test1 test2",
  "test1 test2 test3",
  "test1 test2 test3 test4",
]
```

```sh
console.log(findAllMatches(sentences, "test1"))
```
>["test1", "test1 test2", "test1 test2 test3", "test1 test2 test3 test4"]
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


