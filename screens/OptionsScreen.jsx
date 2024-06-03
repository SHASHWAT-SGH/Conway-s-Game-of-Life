import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

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
        {/* Options */}
        <Button />
      </View>
    </View>
  );
};

export default OptionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
