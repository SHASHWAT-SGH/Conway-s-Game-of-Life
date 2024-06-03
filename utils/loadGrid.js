import AsyncStorage from '@react-native-async-storage/async-storage';

const loadGrid = async key => {
  try {
    const jsonString = await AsyncStorage.getItem(key);
    if (jsonString !== null) {
      const array = JSON.parse(jsonString);
      console.log('2D array retrieved successfully', array);
      return array;
    }
    return null;
  } catch (e) {
    console.error('Failed to retrieve 2D array', e);
  }
};

export default loadGrid;
