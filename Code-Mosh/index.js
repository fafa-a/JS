//Factory function
function createAdress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode,
    }
}
// const adressToto = createAdress("lala", "toulouse", 31_500)
// const adressTata = new Adress("louis plana", "toulouse", 31_500)
let address01 = new Address("a", "b", "c")
let address02 = new Address("a", "b", "c")
let address03 = address01

//Constructor function
function Address(street, city, zipCode) {
    this.street = street
    this.city = city
    this.zipCode = zipCode
}

function areEqual(a, b) {
    return a.street === b.street && a.city === b.city && a.zipCode === b.zipCode
}

function areSame(a, b) {
    return a === b
}
// console.log(areEqual(address01, address02))
// console.log(areSame(address01, address02))
// console.log(areSame(address01, address03))
const blogPost = {
    title: "tata",
    body: "le body",
    author: "toto",
    views: 666,
    comments: [
        { author: "fafa", body: "c'est nul" },
        { author: "brice", body: "c'est top" },
    ],
    isLive: true,
}
console.log(blogPost)

function Post(title, body, author) {
    this.title = title
    this.body = body
    this.author = author
    this.views = 0
    this.comments = []
    this.isLive = false
}

console.log(new Post("ici", "maintenant", "moa"))

const PriceRange = [
    { label: "$", toolotip: "Inexpensive", minPerson: 0, maxPerson: 10 },
    { label: "$$", toolotip: "Moderate", minPerson: 11, maxPerson: 20 },
    { label: "$$$", toolotip: "Expensive", minPerson: 21, maxPerson: 50 },
]
const restaurant = [{ averagePerPerson: 5 }]
