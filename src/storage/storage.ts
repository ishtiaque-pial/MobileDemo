import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {}
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {}
};

export const retrieveData = async (key: string) => {
  try {
    const result = await AsyncStorage.getItem(key);
    return result;
  } catch (e) {
    return null;
  }
};
