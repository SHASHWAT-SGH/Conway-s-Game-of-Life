import gridData from '../constants/GridData';
import createEmptyGrid from './createEmptyGrid';

const numRows = gridData.numRows;
const numCols = gridData.numCols;

const getNextGeneration = grid => {
  const newGrid = createEmptyGrid();

  const directions = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      let neighbors = 0;
      directions.forEach(([x, y]) => {
        const newRow = row + x;
        const newCol = col + y;
        if (
          newRow >= 0 &&
          newRow < numRows &&
          newCol >= 0 &&
          newCol < numCols
        ) {
          neighbors += grid[newRow][newCol];
        }
      });

      if (grid[row][col] === 1 && (neighbors < 2 || neighbors > 3)) {
        newGrid[row][col] = 0;
      } else if (grid[row][col] === 0 && neighbors === 3) {
        newGrid[row][col] = 1;
      } else {
        newGrid[row][col] = grid[row][col];
      }
    }
  }

  return newGrid;
};
export default getNextGeneration;
