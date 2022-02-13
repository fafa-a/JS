const form = document.querySelector("form")
const inputName = document.getElementById("name")
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
        const name = inputName.value
        const firstName = inputFirstName.value
        const phone = inputPhone.value
        const email = inputEmail.value

        const allInputValue = {
            Nom: name,
            Prénom: firstName,
            Téléphone: phone,
            Email: email,
        }

        const isNameValid = isAlpha(name)
        if (name != "" && !isNameValid) {
            error(inputName.parentNode)
        } else {
            inputName.parentNode.style.backgroundColor = "initial"
        }
        const isFirstNameValid = isAlpha(firstName)
        if (firstName != "" && !isFirstNameValid) {
            error(inputFirstName.parentNode)
        } else {
            inputFirstName.parentNode.style.backgroundColor = "initial"
        }
        const isPhoneValid = isNumerique(phone)
        if (phone != "" && !isPhoneValid) {
            error(inputPhone.parentNode)
        } else {
            inputPhone.parentNode.style.backgroundColor = "initial"
        }

        const isEmailValid = isEmail(email)
        if (email != "" && !isEmailValid) {
            error(inputEmail.parentNode)
        } else {
            inputEmail.parentNode.style.backgroundColor = "initial"
        }

        if (isNameValid && isFirstNameValid && isPhoneValid && isEmailValid) {
            divInfo.classList.add("success")
            for (const key in allInputValue) {
                const p = document.createElement("p")
                p.textContent = `${key} : ${allInputValue.key}`
                divInfo.appendChild(p)
            }
        }
    })
}
