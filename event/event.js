const firstDiv = document.querySelector("body  div:first-of-type")
const secondDiv = document.querySelector("body  div:nth-of-type(2)")
const firstButton = document.querySelector("body  button:first-of-type")
const secondButton = document.createElement("button")
const p = document.createElement("p")
secondButton.innerText = "Bouton 2(v1)"
secondButton.style.visibility = "hidden"
firstDiv.appendChild(secondButton)

firstButton.addEventListener("click", function () {
    p.innerText = "Mon premier bouton fonctionne"
    secondButton.style.visibility = "visible"
})
secondButton.addEventListener("click", function () {
    p.innerText = "Mon second bouton fonctionne"
})
secondDiv.appendChild(p)            
