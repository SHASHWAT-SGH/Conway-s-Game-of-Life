import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import color from '../constants/color';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>Header</Text> */}
      <Image
        source={require('../assets/THE-GAME__1_-removebg-preview.png')}
        style={styles.logo}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.color2,
    padding: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
    height: wp(30),
  },
  heading: {},
  logo: {
    flex: 0.8,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
