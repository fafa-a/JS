const form = document.querySelector("form")
const inputLastName = document.getElementById("lastName")
const inputFirstName = document.getElementById("firstName")
const inputPhone = document.getElementById("phone")
const inputEmail = document.getElementById("email")
const divInfo = document.getElementById("info")

const error = function (el) {
    el.style.backgroundColor = "red"
}

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault()

        contact.setLastName(inputLastName)
        contact.setFirstName(inputFirstName)
        contact.setPhone(inputPhone)
        contact.setEmail(inputEmail)

        if (contact.isvalid()) {
            divInfo.classList.add("success")

            for (const [key, value] of Object.entries(contact.getInfo())) {
                const p = document.createElement("p")
                p.textContent = `${key}: ${value}`
                divInfo.appendChild(p)
            }
        }
    })
}
