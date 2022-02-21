$("input[type='button']").prop("disabled", true)
$("select").attr("multiple", true)

$("#liste_fruits option").click(function () {
    $("#ajouter").prop("disabled", false)
})

$("input[id=ajouter]").click(function () {
    $("#panier").append($("#liste_fruits option:selected"))
    $("#panier option:selected").prop("selected", false)
    $("#ajouter").prop("disabled", true)
})

$(document).on("click", function () {
    $("#panier option").click(function () {
        $("#ajouter").prop("disabled", true)
        $("#supprimer").prop("disabled", false)
    })
})

$("input[id=supprimer]").click(function () {
    $("#liste_fruits").append($("#panier option:selected"))
    $("#liste_fruits option:selected").prop("selected", false)
    $("#supprimer").prop("disabled", true)
})
