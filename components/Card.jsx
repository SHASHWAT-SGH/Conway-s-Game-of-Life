import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import color from '../constants/color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import loadGrid from '../utils/loadGrid';
import deleteGrid from '../utils/deleteGrid';

const Card = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          onPress={() => {
            loadGrid('1');
          }}>
          <Text style={styles.text}>Load</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            deleteGrid('1');
          }}>
          <Text style={styles.text}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginVertical: wp(3),
    marginHorizontal: wp(4),
    borderRadius: wp(3),
    backgroundColor: color.color2,
    padding: wp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    gap: wp(4),
  },
  text: {
    color: color.white,
  },
});
