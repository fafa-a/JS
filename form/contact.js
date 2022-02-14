const contact = {
    lastName,
    firstName,
    phone,
    email,
    setLastName: function (element) {
        if (isAlpha(element.value)) {
            this.lastName = element.value
            element.parentNode.style.backgroundColor = "initial"
        } else element.parentNode.style.backgroundColor = "red"
    },
    setFirstName: function (element) {
        if (isAlpha(element.value)) {
            this.firstName = element.value
            element.parentNode.style.backgroundColor = "initial"
        } else element.parentNode.style.backgroundColor = "red"
    },
    setPhone: function (element) {
        if (isNumerique(element.value)) {
            this.phone = element.value
            element.parentNode.style.backgroundColor = "initial"
        } else element.parentNode.style.backgroundColor = "red"
    },
    setEmail: function (element) {
        if (isEmail(element.value)) {
            this.email = element.value
            element.parentNode.style.backgroundColor = "initial"
        } else element.parentNode.style.backgroundColor = "red"
    },
    isvalid: function () {
        return (
            isAlpha(lastName.value) &&
            isAlpha(firstName.value) &&
            isNumerique(phone.value) &&
            isEmail(email.value)
        )
    },
    getInfo: function () {
        return {
            lastName: this.lastName,
            firstName: this.firstName,
            phone: this.phone,
            email: this.email,
        }
    },
}
