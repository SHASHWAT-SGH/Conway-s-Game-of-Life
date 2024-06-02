import {StyleSheet, View} from 'react-native';
import React, {memo, useCallback, useEffect} from 'react';
import getNextGeneration from '../utils/getNextGeneration';
import Cell from './Cell';

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
});
