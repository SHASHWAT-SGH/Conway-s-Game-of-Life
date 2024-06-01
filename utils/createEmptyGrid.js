import gridData from '../constants/GridData';
const numRows = gridData.numRows;
const numCols = gridData.numCols;

const createEmptyGrid = () => {
  return Array.from({length: numRows}).map(() => Array(numCols).fill(0));
};

export default createEmptyGrid;
