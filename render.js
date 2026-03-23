function render() {
  const puzzle = document.getElementById("puzzle");
  puzzle.innerHTML = "";

  board.forEach((value, index) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");

    if (value === null) {
      tile.classList.add("empty");
    } else {
      tile.textContent = value;
      tile.addEventListener("click", () => moveTile(index));
    }

    puzzle.appendChild(tile);
  });
}