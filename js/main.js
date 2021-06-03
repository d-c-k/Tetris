document.addEventListener('DOMContentLoaded', e => {
    const gameBoardWidth = 10
    const gameBoardHeight = 20
    const gameBoardNode = document.getElementById('game_board')

    const gameBoardGrid = new Grid(gameBoardWidth, gameBoardHeight, gameBoardNode)

    gameBoardGrid.createGrid()
    gameBoardGrid.createFloor()

    const nextShapeWidth = 4
    const nextShapeHeight = 2
    const nextShapeNode = document.getElementById('next_shape')

    const nextShapeGrid = new Grid(nextShapeWidth, nextShapeHeight, nextShapeNode)

    nextShapeGrid.createGrid()
}) 
