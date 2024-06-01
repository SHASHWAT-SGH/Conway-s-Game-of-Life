/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {Platform, SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import GameScreen from './screens/GameScreen';
import color from './constants/color';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: color.color1,
    flex: 1,
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }

    return () => {};
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={color.color2}
      />
      <GameScreen />
    </SafeAreaView>
  );
}

export default App;
