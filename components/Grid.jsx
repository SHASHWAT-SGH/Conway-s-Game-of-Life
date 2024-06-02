import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {memo, useCallback, useEffect} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import color from '../constants/color';
import getNextGeneration from '../utils/getNextGeneration';

const Cell = React.memo(({row, column, value, updateGrid}) => (
  <TouchableOpacity onPress={() => updateGrid(row, column)}>
    <View
      style={[styles.cell, value === 1 ? styles.aliveCell : styles.deadCell]}
    />
  </TouchableOpacity>
));

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

  const updateGrid = useCallback(
    (row, column) => {
      setGrid(prevGrid => {
        const newGrid = prevGrid.map((r, rowIndex) =>
          rowIndex === row
            ? r.map((c, colIndex) =>
                colIndex === column ? (isCreator ? 1 : 0) : c,
              )
            : r,
        );
        return newGrid;
      });
    },
    [isCreator, setGrid],
  );

  return (
    <View style={styles.gameWrapper}>
      {/* {console.log('Grid loaded')} */}
      {grid &&
        grid.map((row, rowIndex) => {
          return (
            <View style={styles.row} key={rowIndex}>
              {row.map((column, columnIndex) => {
                return (
                  <Cell
                    key={columnIndex}
                    row={rowIndex}
                    column={columnIndex}
                    value={column}
                    updateGrid={updateGrid}
                  />
                );
              })}
            </View>
          );
        })}
    </View>
  );
};

export default memo(Grid);

const styles = StyleSheet.create({
  gameWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
