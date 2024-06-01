import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import color from '../constants/color';
import createEmptyGrid from '../utils/createEmptyGrid';

import gridData from '../constants/GridData';
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

const Grid = ({isCreator, isStart, grid, setGrid}) => {
  useEffect(() => {
    if (!isStart) {
      return;
    }
    const interval = setInterval(() => {
      setGrid(currentGrid => getNextGeneration(currentGrid));
    }, 1000);

    return () => clearInterval(interval);
  }, [isStart, setGrid]);

  const updateGrid = (row, column) => {
    const newGrid = grid.map(r => r.slice());
    if (row >= 0 && row < numRows && column >= 0 && column < numCols) {
      newGrid[row][column] = isCreator ? 1 : 0;
    }
    setGrid(newGrid);
  };

  return (
    <View style={styles.gameWrapper}>
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
    borderColor: 'gray',
  },
  aliveCell: {
    backgroundColor: color.color3,
  },
  deadCell: {
    backgroundColor: color.color1,
  },
});
