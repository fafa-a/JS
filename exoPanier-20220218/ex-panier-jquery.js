const setOpacity = (tag, value) => $(tag).css({ opacity: value })
const addNewRow = (id, value) => {
    const valueCapitalized = value.slice(0, 1).toUpperCase() + value.slice(1)
    $(`#${id}`).append(
        `<option value="${value.toLowerCase()}">${valueCapitalized}</option>`
    )
}

const deleteRow = (id, value) =>
    $(`#${id} option[value=${value.toLowerCase()}]`).remove()

setOpacity("input[type=button]", 0.5)

$("#liste_fruits option").click(function () {
    setOpacity("input[id=ajouter]", 1)
    let myFruits = this.text
    $("input[id=ajouter]").click(function () {
        if (myFruits) {
            addNewRow("panier", myFruits)
            deleteRow("liste_fruits", myFruits.toLowerCase())
            setOpacity("input[type=button]", 0.5)
        }
        myFruits = ""
    })
})

$(document).on("change", function () {
    $("#panier option").click(function () {
        setOpacity("input[id=supprimer]", 1)
        let myFruits = this.text
        $("input[id=supprimer]").click(function () {
            if (myFruits) {
                deleteRow("panier", myFruits.toLowerCase())
                addNewRow("liste_fruits", myFruits)
                setOpacity("input[type=button]", 0.5)
            }
            myFruits = ""
        })
    })
})
