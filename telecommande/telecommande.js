const Telecommande = {
    color: "black",
    getForm: function () {
        return document.getElementById("tableau")
    },
    getRows: function () {
        return this.getForm().getElementsByTagName("tr")
    },
    getCells: function () {
        return Array.from(this.getForm().getElementsByTagName("td"))
    },
    getFilledCells: function () {
        return this.getCells().filter(cell => cell.innerHTML != "")
    },
    addId: function () {
        this.getCells().forEach(cell => {
            cell.textContent = cell.id
            cell.style.color = this.color
            cell.style.fontWeight = "normal"
        })
        this.showAllCounter()
    },
    delAleatoire: function () {
        const halfTableCell = this.getCells().length / 2
        for (let i = 0; i < halfTableCell; i++) {
            const randomCell = Math.floor(
                Math.random() * this.getCells().length
            )
            this.getCells()[randomCell].textContent = ""
        }
        this.showAllCounter()
    },
    getEmptyCells: function () {
        return this.getCells().filter(cell => cell.textContent === "")
    },
    firstCase: function () {
        if (this.getEmptyCells().length > 0) {
            const firstCellEmpty = this.getEmptyCells()
                .map(el => el.id)
                .sort()[0]
            const cell = this.getCells().find(el => el.id === firstCellEmpty)
            cell.textContent = cell.id
            cell.style.color = this.color
            cell.style.fontWeight = "bold"
        }
        this.showAllCounter()
    },
    addIdDansVide: function () {
        this.getCells()
            .filter(cell => cell.textContent === "")
            .forEach(cell => {
                cell.textContent = cell.id
                cell.style.fontWeight = "bold"
            })
        this.showAllCounter()
    },
    setColor: function (color) {
        this.color = color
        this.getCells()
            .filter(cell => cell.textContent === "")
            .map(cell => (cell.style.color = color))
    },
    count: function (color) {
        return this.getFilledCells().filter(cell => cell.style.color === color)
            .length
    },
    showCounter: function (color) {
        const tdDisplayNumber = document.getElementById(`nb_${color}`)
        tdDisplayNumber.textContent = this.count(color)
    },
    showAllCounter: function () {
        document
            .querySelectorAll('[id^="nb_"]')
            .forEach(el => this.showCounter(el.id.slice(3)))
    },
    getColorChecked: function () {
        return document.querySelector('input[type="radio"]:checked').id
    },
}
