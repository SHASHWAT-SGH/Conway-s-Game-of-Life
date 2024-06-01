import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Grid from '../components/Grid';
import Menu from '../components/Menu';

const GameScreen = () => {
  const [isCreator, setIsCreator] = useState(false);
  return (
    <View style={styles.container}>
      <Grid isCreator={isCreator} />
      <Menu setIsCreator={setIsCreator} />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
