import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import color from '../constants/color';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      <View>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.color3,
    paddingVertical: hp(0.8),
    paddingHorizontal: hp(1.8),
    borderRadius: hp(0.4),
  },
  buttonText: {
    fontWeight: '800',
    fontSize: hp(2.1),
    textAlign: 'center',
    color: color.white,
  },
});
