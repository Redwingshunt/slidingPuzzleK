import { tiles, swapTiles } from "./state.js";
import { isAdjacent } from "./utils.js";
import { render } from "./render.js";

const grid = document.getElementById("grid");

export function moveTile(index) {
  const emptyIndex = tiles.indexOf(null);

  if (isAdjacent(index, emptyIndex)) {
    swapTiles(index, emptyIndex);
    render(grid);
  }
}

// initial render
render(grid);