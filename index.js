numbers = [1, 5, 8, 9, 3]

// map | return elements //
console.log(numbers.map(n => {
    console.log(n)
    return n
}))

// filter | return elements with condition //
console.log(numbers.filter(n => {
    if (n % 2 === 0) return n
}))

// forEach | return elements and index //
console.log('numbers.forEach((n, i) => {
    console.log(`Element = ${n} | Index = ${i}`)
}))

// reduce | return sum of matrix elements plus an additional customizable sum //
const reduceExample = (array, custom_sum=0) => array.reduce((accumulator, number, index, default_array) => {
    console.log(`Total = ${accumulator} | Number = ${number} | Index = ${index} | Default Array = ${default_array}`)
    return accumulator += number
}, custom_sum)

console.log(reduceExample(numbers))

