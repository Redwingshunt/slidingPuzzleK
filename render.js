import { tiles } from "./state.js";
import { moveTile } from "./main.js";

export function render(grid) {
  grid.innerHTML = "";

  tiles.forEach((value, index) => {
    const div = document.createElement("div");
    div.classList.add("tile");

    if (value === null) {
      div.classList.add("empty");
    } else {
      div.textContent = value;
      div.addEventListener("click", () => moveTile(index));
    }

    grid.appendChild(div);
  });
}