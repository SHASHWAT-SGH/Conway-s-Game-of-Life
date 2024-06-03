import AsyncStorage from '@react-native-async-storage/async-storage';

const getAllGrids = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    if (keys.length > 0) {
      const result = await AsyncStorage.multiGet(keys);
      const data = result.map(([key, value]) => ({
        key,
        value: JSON.parse(value),
      }));
      console.log('All data retrieved successfully', data);
      return data;
    }
    console.log('No data found in AsyncStorage');
    return [];
  } catch (e) {
    console.error('Failed to get all data from AsyncStorage', e);
    return [];
  }
};

export default getAllGrids;
