import { size } from "./state.js";

export function isAdjacent(i, j) {
  const row1 = Math.floor(i / size);
  const col1 = i % size;

  const row2 = Math.floor(j / size);
  const col2 = j % size;

  return (
    (row1 === row2 && Math.abs(col1 - col2) === 1) ||
    (col1 === col2 && Math.abs(row1 - row2) === 1)
  );
}