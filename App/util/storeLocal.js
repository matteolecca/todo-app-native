import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeLocalData = async  (key, value) =>{
    try {
        await AsyncStorage.setItem(key,value)
        return
      } catch (e) {
        return {error : e}
      }
} 

export const getLocalData = async key => {
    try {
      const value = await AsyncStorage.getItem(key)
      return value
    } catch(e) {
      return { error : e}
    }
  }

  export const removeLocalData = async key => {
    try {
      const value = await AsyncStorage.removeItem(key)
      return value
    } catch(e) {
      return { error : e}
    }
  }