class Grid {
    constructor(width, height, parentNode) {
        this.width = width
        this.height = height
        this.parentNode = parentNode
    }

    createGrid() {
        const area = this.width*this.height
        for(let i = 1; i <= area; i++) {
            let cell = document.createElement('div')
            this.parentNode.appendChild(cell)
        }
    }

    createFloor() {
        for(let i = 1; i <= this.width; i++) {
            let floorCell = document.createElement('div')
            floorCell.className = 'static'
            this.parentNode.appendChild(floorCell)
        }
    }
}
