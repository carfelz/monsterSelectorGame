interface Cell {
  row: number;
  col: number;
  cost: number;
}

export function findLessCostPath(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  const directions: [number, number][] = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  const queue: Cell[] = [{ row: 0, col: 0, cost: grid[0][0] }];

  while (queue.length > 0) {
      const { row, col, cost } = queue.shift()!;

      if (row === rows - 1 && col === cols - 1) {
          return cost;
      }

      for (const [dr, dc] of directions) {
          const newRow = row + dr;
          const newCol = col + dc;

          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
              queue.push({ row: newRow, col: newCol, cost: cost + grid[newRow][newCol] });
          }
      }
  }

  return -1; // No valid path found
};