const NestedArr = [64, 56,[87,98,34],[75,[53,90]]];

const x = NestedArr.flat(2);

const max = Math.max(...x)

console.log(max);