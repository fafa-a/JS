const buttonCellBg = document.getElementById("cellBtn")
const buttonLineBg = document.getElementById("lineBtn")

const cellBg = buttonCellBg.parentElement
const lineBg = buttonLineBg.parentNode.parentNode

const changeCellbg = function () {
  cellBg.style.backgroundColor = "#ff7373"
}
const changeLinebg = function () {
  tdof2Rows.forEach((element) => {
    element.style.backgroundColor = "#ff7373"
  })
}
const allTd = document.querySelectorAll("td")
const tdArr = Array.from(allTd)
const tdof2Rows = tdArr.slice(3)

buttonCellBg.addEventListener("click", changeCellbg)
buttonLineBg.addEventListener("click", changeLinebg)
