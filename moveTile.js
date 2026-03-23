function moveTile(index) {
  const emptyIndex = board.indexOf(null);

  if (isAdjacent(index, emptyIndex)) {
    // swapping it from the empty tile
    [board[index], board[emptyIndex]] = [board[emptyIndex], board[index]];
    render();// callback to render the board after the move
    checkWin();
  }
}