document.addEventListener('DOMContentLoaded', e => {
    const gameBoardWidth = 2
    const gameBoardHeight = 3
    const gameBoardNode = document.getElementById('game_board')

    const gameBoardGrid = new Grid(gameBoardWidth, gameBoardHeight, gameBoardNode)

    gameBoardGrid.createGrid()
}) 
