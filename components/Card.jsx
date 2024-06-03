import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import color from '../constants/color';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Card = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Card</Text>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity>
          <Text style={styles.text}>Load</Text>
        </TouchableOpacity>
        <TouchableOpacity>
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
