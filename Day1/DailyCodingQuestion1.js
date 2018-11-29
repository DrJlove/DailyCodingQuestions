console.log(containsTwoAddends([10, 15, 3, 7], 17))

function containsTwoAddends (arrayNums, sum) {
  dict = {}
  console.log(arrayNums)
  for (x in arrayNums) {
    console.log(sum - arrayNums[x])
    console.log(dict)
    if (dict[sum - arrayNums[x]] == true) {
      return true
    }
    dict[arrayNums[x]] = true
  }
  return false
}
