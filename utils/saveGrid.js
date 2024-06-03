import AsyncStorage from '@react-native-async-storage/async-storage';

const saveGrid = async (key, array) => {
  try {
    const jsonString = JSON.stringify(array);
    await AsyncStorage.setItem(key, jsonString);
    console.log('2D array stored successfully');
  } catch (e) {
    console.error('Failed to store 2D array', e);
  }
};

export default saveGrid;
