export const size = 3;

export let tiles = [
  1, 2, 3,
  4, 5, 6,
  7, 8, null
];

export function swapTiles(i, j) {
  [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
}