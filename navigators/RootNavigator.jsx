import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GameScreen from '../screens/GameScreen';
import OptionsScreen from '../screens/OptionsScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="GameScreen"
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        animationTypeForReplace: 'push',
      }}>
      <Stack.Screen name="GameScreen" component={GameScreen} />
      <Stack.Screen name="OptionsScreen" component={OptionsScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
