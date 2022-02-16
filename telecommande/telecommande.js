const Telecommande = {
    getForm: function () {
        return document.getElementById("tableau")
    },
    getRows: function () {
        return this.getForm().getElementsByTagName("tr")
    },
    getCells: function () {
        return Array.from(this.getForm().getElementsByTagName("td"))
    },
    addId: function () {
        this.getCells().forEach(cell => (cell.textContent = cell.id))
        this.setColoredCellsLength(this.getColorChecked())
    },
    delAleatoire: function () {
        const halfTableCell = this.getCells().length / 2
        for (let i = 0; i < halfTableCell; i++) {
            const randomCell = Math.floor(
                Math.random() * this.getCells().length
            )
            this.getCells()[randomCell].textContent = ""
        }
        this.setColoredCellsLength(this.getColorChecked())
    },
    firstCase: function () {
        this.getCells()
            .slice(0, 1)
            .map(cell => {
                cell.textContent = cell.id
                cell.style.fontWeight = "bold"
            })
        this.setColoredCellsLength(this.getColorChecked())
    },
    addIdDansVide: function () {
        this.getCells()
            .filter(cell => cell.textContent === "")
            .forEach(cell => {
                cell.textContent = cell.id
                cell.style.fontWeight = "bold"
            })
        this.setColoredCellsLength(this.getColorChecked())
    },
    setColor: function (color) {
        this.getCells()
            .filter(cell => cell.textContent === "")
            .map(cell => (cell.style.color = color))
    },
    setColoredCellsLength: function (color) {
        console.log(color)

        const tdDisplayNumber = document.getElementById(`nb_${color}`)
        tdDisplayNumber.textContent = this.getCells().filter(
            cell => cell.style.color === color
        ).length
    },
    getColorChecked: function () {
        return document.querySelector('input[type="radio"]:checked').id
    },
}
