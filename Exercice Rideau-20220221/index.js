let width = $("section div:first-child").width()
let height = $("section div:first-child").height()
let fontSizeH1 = $("h1").css("fontSize")
$("img").css({
    maxWidth: "100%",
    height: "100%",
})
$("#rideau").css({
    width,
    height,
})

$("button:last-of-type").click(function () {
    $("#rideau").toggle()
    console.log(fontSizeH1)
})
$("button:first-of-type").click(function () {
    console.log(fontSizeH1)
    width = `${width + 20}px`
    height = `${height + 20}px`
    $("section div:first-child").css({
        width,
        height,
    })
    $("#rideau").css({
        width,
        height,
        fontSize: `${fontSizeH1. + '0.1em'}em`,
    })
})
