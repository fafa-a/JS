// //Factory function
// function createAdress(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode,
//   }
// }
// // const adressToto = createAdress("lala", "toulouse", 31_500)
// // const adressTata = new Adress("louis plana", "toulouse", 31_500)
// let address01 = new Address("a", "b", "c")
// let address02 = new Address("a", "b", "c")
// let address03 = address01

// //Constructor function
// function Address(street, city, zipCode) {
//   this.street = street
//   this.city = city
//   this.zipCode = zipCode
// }

// function areEqual(a, b) {
//   return a.street === b.street && a.city === b.city && a.zipCode === b.zipCode
// }

// function areSame(a, b) {
//   return a === b
// }
// // console.log(areEqual(address01, address02))
// // console.log(areSame(address01, address02))
// // console.log(areSame(address01, address03))
// const blogPost = {
//   title: "tata",
//   body: "le body",
//   author: "toto",
//   views: 666,
//   comments: [
//     { author: "fafa", body: "c'est nul" },
//     { author: "brice", body: "c'est top" },
//   ],
//   isLive: true,
// }
// console.log(blogPost)

// function Post(title, body, author) {
//   this.title = title
//   this.body = body
//   this.author = author
//   this.views = 0
//   this.comments = []
//   this.isLive = false
// }

// console.log(new Post("ici", "maintenant", "moa"))

// const PriceRange = [
//   { label: "$", toolotip: "Inexpensive", minPerson: 0, maxPerson: 10 },
//   { label: "$$", toolotip: "Moderate", minPerson: 11, maxPerson: 20 },
//   { label: "$$$", toolotip: "Expensive", minPerson: 21, maxPerson: 50 },
// ]
// const restaurant = [{ averagePerPerson: 5 }]
// const arrayFromRange = (min, max) => {
//     const output = []
//     for(let i = min; i <= max; i++) {
//         output.push(i)
//     }
//     return output
// }
// const number = arrayFromRange(-10, -4)
// console.log(number)
const numbers = [1, 2, 3, 4]

// const includes = (array, value) => {
//     for (const val of array) if (value === val) return true
//     return false
// }
// const isNumberExist = includes(number, 2)
// console.log(isNumberExist)

// const except = (array, excluded) => {
//     const output = []
//     for (const element of array) {
//         if (!excluded.includes(element)) output.push(element)
//     }
//     return output
// }
// const output = except(number, [1, 3])
// console.log(output)

const move = (array, index, offset) => {
    const position = index + offset
    if (psotion >= array.length || position < 0) {
        console.error("Invalid offset")
        return
    }
    const output = [...array]
    const element = output.splice(index, 1)[0]
    output.splice(position, 0, element)
    return output
}
const output = move(numbers, 0, 1)
console.log(output)
const numbers = [1, 200, 3, 4]
// const move = (array, index, offset) => {
//     const position = index + offset
//     if (position >= array.length || position < 0) {
//         console.error("Invalid offset")
//         return
//     }
//     const output = [...array]
//     const element = output.splice(index, 1)[0]
//     output.splice(position, 0, element)
//     return output
// }
// const output = move(numbers, 0, 1)
// console.log(output)

// const countOccurences = (array, searchElement) => {
//     // let count = 0
//     // for (const item of array) if (item === searchElement) count++
//     // return count
//     return array.reduce((acc, current) => {
//         const occurence = current === searchElement ? 1 : 0
//         console.log(acc, current, searchElement)
//         return acc + occurence
//     }, 0)
// }
// const count = countOccurences(numbers, 1)
// console.log(count)

const getMax = array => array.sort((a, b) => a - b).reverse()[0]
const max = getMax(numbers)
console.log(max)

const getMaxSoluce = array => {
    if (array.length === 0) return undefined
    return array.reduce((a, b) => (a > b ? a : b))
}
const maxSoluce = getMaxSoluce(numbers)
console.log(maxSoluce)
const movies = [
    { title: "a", year: 2018, rating: 4.5 },
    { title: "b", year: 2018, rating: 4.7 },
    { title: "b", year: 2018, rating: 3 },
    { title: "d", year: 2017, rating: 4.5 },
]

const titles = movies
    .filter(el => (el.year === 2018 && el.rating >= 4 ? el : null))
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(el => el.title)

console.log(titles)
