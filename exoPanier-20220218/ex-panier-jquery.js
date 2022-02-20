const addNewOption = (id, value) => {
    const valueCapitalized = value.slice(0, 1).toUpperCase() + value.slice(1)
    $(`#${id}`).append(
        `<option value="${value.toLowerCase()}">${valueCapitalized}</option>`
    )
}
const deleteOption = (id, value) =>
    $(`#${id} option[value=${value.toLowerCase()}]`).remove()

$("input[type='button']").prop("disabled", true)

$("#liste_fruits option").click(function () {
    $("#ajouter").prop("disabled", false)
})

$("input[id=ajouter]").click(function () {
    const value = $("#liste_fruits option:selected").text()
    addNewOption("panier", value)
    deleteOption("liste_fruits", value.toLowerCase())
    $("#ajouter").prop("disabled", true)
})

$(document).on("change", function () {
    $("#panier option").click(function () {
        $("#supprimer").prop("disabled", false)
    })
})

$("input[id=supprimer]").click(function () {
    const value = $("#panier option:selected").text()
    deleteOption("panier", value.toLowerCase())
    addNewOption("liste_fruits", value)
    $("#supprimer").prop("disabled", true)
})
