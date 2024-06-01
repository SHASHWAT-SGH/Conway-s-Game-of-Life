import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import color from '../constants/color';

const Menu = ({setIsCreator}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsCreator(true)}>
        <View>
          <Text style={styles.text}>Creator</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsCreator(false)}>
        <View>
          <Text style={styles.text}>Eraser</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.color2,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: wp(10),
    paddingVertical: hp(2),
    paddingHorizontal: hp(1),
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
    fontSize: hp(2.2),
  },
});
