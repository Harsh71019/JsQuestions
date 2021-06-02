const array = [1, 3, 7, 9, 2];

//target = 11

//return the pair that adds upto 11

function TwoSum() {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] + array[i] === 11) {
        return [array.indexOf(array[i]), array.indexOf(array[j])]
      }
    }
  }
}

console.log(TwoSum());
