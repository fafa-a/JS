const firstDiv = document.querySelector("body  div:first-of-type")
const secondDiv = document.querySelector("body  div:nth-of-type(2)")
const firstButton = document.querySelector("body  button:first-of-type")
const p = document.createElement("p")

firstButton.addEventListener("click", function () {
    p.innerText = "Mon premier bouton fonctionne"
    const secondButton = document.createElement("button")
    const secondButtonDom = document.querySelector(
        "body > div:nth-child(1) > button:nth-child(2)"
    )
    if (!secondButtonDom) {
        secondButton.innerText = "Bouton 2(v1)"
        firstDiv.appendChild(secondButton)
    }
    secondButton.addEventListener("click", function () {
        p.innerText = "Mon second bouton fonctionne"
    })
    secondDiv.appendChild(p)
})
