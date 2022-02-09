import { isAlpha, isNumerique, isEmail } from "./expressionsRegulieresForm"

const form = document.querySelector("form")
const inputName = document.getElementById("name")
const inputFirstName = document.getElementById("firstName")
const inputPhone = document.getElementById("phone")
const inputEmail = document.getElementById("email")
console.log("tata")
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault()
    const name = inputName.value
    const firstName = inputFirstName.value
    const phone = inputPhone.value
    const email = inputEmail.value
    const isNameValid = isAlpha(name)
    const isFirstNameValid = isAlpha(firstName)
    const isPhoneValid = isNumerique(phone)
    const isEmailValid = isEmail(email)
    if (isNameValid && isFirstNameValid && isPhoneValid && isEmailValid) {
      alert("Votre formulaire est valide !")
    } else {
      alert("Votre formulaire est invalide !")
    }
  })
}
