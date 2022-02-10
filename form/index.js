function isAlpha(val) {
  var ok = false
  if (val != "") {
    var regex = /^[a-zA-Z\-]*$/
    ok = regex.test(val)
  }
  return ok
}

function isNumerique(val) {
  var ok = false
  if (val != "") {
    var regex = /^[0-9\.]*$/
    ok = regex.test(val)
  }
  return ok
}

function isEmail(val) {
  var ok = false
  if (val != "") {
    var regex = /^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/i
    ok = regex.test(val)
  }
  return ok
}

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
    
    const allInput = {
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
      for (const key in allInput) {
        const p = document.createElement("p")
        p.textContent = `${key} : ${allInput[key]}`
        divInfo.appendChild(p)
      }
    }
  })
}
