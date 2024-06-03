import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import color from '../constants/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Card from '../components/Card';

const OptionsScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1.2,
        }}>
        <Header />
      </View>
      <View
        style={{
          flex: 7,
        }}>
        <View style={styles.headingConatiner}>
          <Text style={styles.heading}>Saved Patterns</Text>
        </View>
        <View>
          <Card />
          <Card />
          <Card />
        </View>
      </View>
    </View>
  );
};

export default OptionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.color1,
  },
  headingConatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp(2),
  },
  heading: {
    color: color.white,
    fontSize: hp(3),
    fontWeight: '800',
  },
});
