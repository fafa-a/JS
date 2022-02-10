const firstDiv = document.querySelector("body  div:first-of-type")
const secondDiv = document.querySelector("body  div:nth-of-type(2)")
const firstButton = document.querySelector("body  button:first-of-type")
const secondButton = document.createElement("button")
const p = document.createElement("p")
secondButton.innerText = "Bouton 2(v1)"
firstDiv.appendChild(secondButton)

// first version
const addEventToButton = function () {
  firstButton.addEventListener("click", function () {
    p.innerText = "Mon premier bouton fonctionne"
  })
  secondButton.addEventListener("click", function () {
    p.innerText = "Mon second bouton fonctionne"
  })
  secondDiv.appendChild(p)
}

// second version
// const addEventToButton = function () {
//   const button = arguments[0] === "firstButton" ? firstButton : secondButton
//   button.addEventListener("click", function () {
//     p.innerText =
//       button === firstButton
//         ? "Mon premier bouton fonctionne"
//         : "Mon second bouton fonctionne"
//   })
//   secondDiv.appendChild(p)
// }
// addEventToButton("firstButton")
// addEventToButton()
