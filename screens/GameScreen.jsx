import {StyleSheet, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Grid from '../components/Grid';
import Menu from '../components/Menu';
import createEmptyGrid from '../utils/createEmptyGrid';
import Header from '../components/Header';
import color from '../constants/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../components/Button';
import saveGrid from '../utils/saveGrid';

const GameScreen = ({route}) => {
  const [isCreator, setIsCreator] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [grid, setGrid] = useState(createEmptyGrid());

  const [showInput, setShowInput] = useState(false);

  const [text, setText] = useState('');

  useEffect(() => {
    if (route.params?.grid) {
      setGrid(route.params.grid);
    }
  }, [route.params?.grid]);

  return (
    <View style={styles.container}>
      {/* {console.log('Screen loaded')} */}
      <View style={{flex: 1.2}}>
        <Header />
      </View>
      <View style={{flex: 6}}>
        <View style={styles.inputWrapper}>
          {showInput && (
            <>
              <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
                maxLength={25}
                placeholder="Enter name"
                autoFocus
              />
              <View style={styles.btnWrapper}>
                <Button
                  text={'Save'}
                  onPress={() => {
                    saveGrid(text, grid);

                    setShowInput(false);
                  }}
                />
                <Button
                  text={'Cancel'}
                  onPress={() => {
                    setShowInput(false);
                  }}
                />
              </View>
            </>
          )}
        </View>
        <Grid
          isCreator={isCreator}
          isStart={isStart}
          grid={grid}
          setGrid={setGrid}
        />
      </View>
      <View style={{flex: 1.8}}>
        <Menu
          setIsCreator={setIsCreator}
          isCreator={isCreator}
          setIsStart={setIsStart}
          isStart={isStart}
          setGrid={setGrid}
          setShowInput={setShowInput}
          setText={setText}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    height: hp(100),
  },
  inputWrapper: {
    backgroundColor: color.color1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: wp(3),
    gap: wp(2),
  },
  input: {
    borderWidth: wp(0.3),
    borderColor: color.gray,
    fontSize: hp(2),
    color: color.white,
    paddingVertical: 0,
    paddingHorizontal: wp(2.5),
    fontWeight: '600',
    width: wp(60),
    textAlign: 'center',
  },
  btnWrapper: {
    flexDirection: 'row',
    gap: wp(3),
  },
});
