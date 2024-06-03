import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import color from '../constants/color';

import gridData from '../constants/GridData';
import createEmptyGrid from '../utils/createEmptyGrid';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';
import saveGrid from '../utils/saveGrid';
const numRows = gridData.numRows;
const numCols = gridData.numCols;

const Menu = ({setIsCreator, isCreator, setIsStart, isStart, setGrid}) => {
  const navigation = useNavigation();

  const toggleStart = () => {
    setIsStart(prev => !prev);
  };

  const generateRandomGrid = () => {
    const newGrid = Array.from({length: numRows}).map(() =>
      Array.from({length: numCols}).map(() => (Math.random() > 0.8 ? 1 : 0)),
    );
    setGrid(newGrid);
    setIsStart(false);
  };

  const clearGrid = () => {
    setGrid(createEmptyGrid());
    setIsStart(false);
  };

  return (
    <>
      {/* {console.log('Menu loaded')} */}
      <View style={styles.container}>
        <View style={styles.row2}>
          <TouchableOpacity
            style={[styles.button, isCreator ? {opacity: 1} : {opacity: 0.5}]}
            onPress={() => {
              setIsCreator(true);
              setIsStart(false);
            }}>
            <View>
              <Text style={styles.text}>Creator</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleStart}>
            <View style={styles.startButton}>
              <Text style={styles.text}>{isStart ? 'Stop' : 'Start'}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, !isCreator ? {opacity: 1} : {opacity: 0.5}]}
            onPress={() => {
              setIsCreator(false);
              setIsStart(false);
            }}>
            <View>
              <Text style={styles.text}>Eraser</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={generateRandomGrid}>
            <View>
              <Text style={styles.text}>Generate Random Grid</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={clearGrid}>
            <View>
              <Text style={styles.text}>Clear Grid</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.row2}>
          <Button
            text={'Save'}
            onPress={() => {
              saveGrid('1', [
                [0, 0],
                [0, 0],
                [0, 0],
              ]);
            }}
          />
          <Button
            text={'View Saved'}
            onPress={() => {
              navigation.push('OptionsScreen');
            }}
          />
        </View>
      </View>
    </>
  );
};

export default memo(Menu);

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.color2,
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    // minHeight: wp(10),
    paddingVertical: hp(2),
    paddingHorizontal: hp(1),
    gap: wp(2),
    flex: 1,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    backgroundColor: color.color3,
    paddingVertical: hp(0.8),
    paddingHorizontal: hp(1.8),
    borderRadius: hp(0.4),
  },
  text: {
    fontWeight: '800',
    fontSize: hp(2.1),
    textAlign: 'center',
    color: color.white,
  },
  startButton: {
    color: color.white,
    // backgroundColor: '',
    borderWidth: wp(0.5),
    borderColor: color.white,
    paddingVertical: hp(0.8),
    paddingHorizontal: hp(1.8),
    borderRadius: hp(0.4),
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(2),
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
