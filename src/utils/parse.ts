import {HouseItem} from '../models/HouseItem';

export const parseFirebaseObjetToHomeItem = (object: any): HouseItem[] => {
  try {
    const parsedList = Object.keys(object).map(key => {
      const currentItem = object[key];

      return {...currentItem, id: key};
    });

    return parsedList;
  } catch (error) {
    console.log(error);
    return [];
  }
};
