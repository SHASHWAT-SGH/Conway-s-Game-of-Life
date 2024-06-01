import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import color from '../constants/color';

const numRows = 20;
const numCols = 20;

const createEmptyGrid = () => {
  return Array.from({length: numRows}).map(() => Array(numCols).fill(0));
};

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

const Grid = ({isCreator}) => {
  const [grid, setGrid] = useState(createEmptyGrid());
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    if (!isStart) {
      return;
    }
    const interval = setInterval(() => {
      setGrid(currentGrid => getNextGeneration(currentGrid));
    }, 1000);

    return () => clearInterval(interval);
  }, [isStart]);

  // useEffect(() => {
  //   console.log(isCreator);
  // }, [isCreator]);

  // useEffect(() => {
  //   console.log(grid);
  // }, [grid]);

  const generateRandomGrid = () => {
    const newGrid = Array.from({length: numRows}).map(() =>
      Array.from({length: numCols}).map(() => (Math.random() > 0.8 ? 1 : 0)),
    );
    setGrid(newGrid);
  };

  const updateGrid = (row, column) => {
    if (!isCreator) {
      return;
    }
    const newGrid = grid.map(r => r.slice());
    if (row >= 0 && row < numRows && column >= 0 && column < numCols) {
      newGrid[row][column] = 1;
    }
    setGrid(newGrid);
  };

  const startGame = () => {
    setIsStart(true);
  };

  return (
    <View style={styles.gameWrapper}>
      <TouchableOpacity onPress={generateRandomGrid}>
        <Text
          style={{
            backgroundColor: 'red',
          }}>
          generate random
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={startGame}>
        <Text
          style={{
            backgroundColor: 'red',
          }}>
          start
        </Text>
      </TouchableOpacity>
      {grid &&
        grid.map((row, rowIndex) => {
          return (
            <View style={styles.row} key={rowIndex}>
              {row.map((column, columnIndex) => {
                return (
                  <TouchableOpacity
                    key={columnIndex}
                    onPress={() => updateGrid(rowIndex, columnIndex)}>
                    <View
                      style={[
                        styles.cell,
                        column === 1 ? styles.aliveCell : styles.deadCell,
                      ]}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
    </View>
  );
};

export default Grid;

const styles = StyleSheet.create({
  gameWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.8,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: wp(4.5),
    height: wp(4.5),

    borderWidth: wp(0.2),
  },
  aliveCell: {
    backgroundColor: color.color3,
  },
  deadCell: {
    backgroundColor: color.color1,
  },
});
