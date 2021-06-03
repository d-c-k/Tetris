class Tetrominoes {
    constructor(width) {
        this.width = width
    }

    generateTetromino() {
        const I = [
            [this.width, this.width + 1, this.width + 2, this.width + 3],
            [2, this.width + 2, this.width*2 + 2, this.width*3 + 2],
            [this.width*2, this.width*2 + 1, this.width*2 + 2, this.width*2 + 3],
            [1, this.width + 1, this.width*2 + 1, this.width*3 + 1]
        ]

        const J = [
            [0, this.width, this.width + 1, this.width + 2],
            [1, 2 ,this.width + 1, this.width*2 + 1],
            [this.width, this.width + 1, this.width + 2, this.width*2 + 2],
            [1, this.width + 1, this.width*2, this.width*2 + 1]
        ]

        const L = [
            [2, this.width, this.width + 1, this.width + 2],
            [1, this.width + 1, this.width*2 + 1, this.width*2 + 2],
            [this.width, this.width + 1, this.width + 2, this.width*2],
            [0, 1, this.width + 1, this.width*2 + 1]
        ]

        const O = [
            [1, 2, this.width + 1, this.width + 2],
            [1, 2, this.width + 1, this.width + 2],
            [1, 2, this.width + 1, this.width + 2],
            [1, 2, this.width + 1, this.width + 2]
        ]
    }
}
