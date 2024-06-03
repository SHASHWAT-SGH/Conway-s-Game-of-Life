import AsyncStorage from '@react-native-async-storage/async-storage';

const deleteGrid = async key => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Data for key "${key}" deleted successfully`);
  } catch (e) {
    console.error(`Failed to delete data for key "${key}"`, e);
  }
};

export default deleteGrid;
