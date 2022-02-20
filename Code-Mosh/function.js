//sum(1,2,3,4)
function sum(...items) {
    if (Array.isArray(items[0])) items = [...items[0]]
    return items.reduce((a, b) => a + b)
}
// console.log(sum(1, 2, 3, 4))
// console.log(sum([1, 2, 3, 4]))

const circle = {
    radius: 2,
    get area() {
        return Math.PI * this.radius * this.radius
    },
}
// console.log(circle.area)

const countOccurences = (array, searchElement) => {
    if (!Array.isArray(array)) throw new Error("This is not an array !")
    return array.reduce((acc, current) => {
        const occurence = current === searchElement ? 1 : 0
        console.log(acc, current, searchElement)
        return acc + occurence
    }, 0)
}
try {
    const numbers = [1, 2, 3, 4]
    const count = countOccurences(numbers, 1)
    console.log(count)
} catch (error) {
    console.log(error.message)
}
