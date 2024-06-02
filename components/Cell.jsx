import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import color from '../constants/color';

const Cell = ({row, column, value, updateGrid}) => {
  return (
    <TouchableOpacity onPress={() => updateGrid(row, column)}>
      <View
        style={[styles.cell, value === 1 ? styles.aliveCell : styles.deadCell]}
      />
    </TouchableOpacity>
  );
};

export default memo(Cell);

const styles = StyleSheet.create({
  cell: {
    width: wp(4.5),
    height: wp(4.5),

    borderWidth: wp(0.2),
    borderColor: color.gray,
  },
  aliveCell: {
    backgroundColor: color.color3,
  },
  deadCell: {
    backgroundColor: color.color1,
  },
});
