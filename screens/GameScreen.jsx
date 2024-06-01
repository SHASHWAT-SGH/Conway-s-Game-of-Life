import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Grid from '../components/Grid';
import Menu from '../components/Menu';
import createEmptyGrid from '../utils/createEmptyGrid';
import gridData from '../constants/GridData';
import Header from '../components/Header';

const GameScreen = () => {
  const [isCreator, setIsCreator] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [grid, setGrid] = useState(createEmptyGrid());

  return (
    <View style={styles.container}>
      <Header />
      <Grid
        isCreator={isCreator}
        isStart={isStart}
        grid={grid}
        setGrid={setGrid}
      />
      <Menu
        setIsCreator={setIsCreator}
        isCreator={isCreator}
        setIsStart={setIsStart}
        isStart={isStart}
        setGrid={setGrid}
      />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
