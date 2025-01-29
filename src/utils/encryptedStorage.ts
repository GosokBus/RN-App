import EncryptedStorage from 'react-native-encrypted-storage';

export const setEncryptedStorage = async <T>(name: string, value: T) => {
  await EncryptedStorage.setItem(name, JSON.stringify(value));
};
export const getEncryptedStorage = async (name: string) => {
  const storedData = await EncryptedStorage.getItem(name);

  return storedData ? JSON.parse(storedData) : null;
};
