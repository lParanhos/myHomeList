import {firebaseApp} from './firebase';
import 'firebase/database';
import {HouseItem} from '../models/HouseItem';
import {parseFirebaseObjetToHomeItem} from '../utils/parse';

const dbRef = process.env.NODE_ENV === 'development' ? '/itemsDEV' : '/items';

const db = firebaseApp.database().ref(dbRef);

export const getItems = async (): Promise<HouseItem[]> => {
  console.log(process.env);
  await firebaseApp.auth().signInAnonymously();

  const result = await db.once('value');
  const parsedValue = parseFirebaseObjetToHomeItem(result.val());
  return parsedValue;
};

/**
 * Add new item in list
 * @param {HouseItem} item -> The new item object
 * @return {string||null} Id of this item
 */
export const setItem = async (item: HouseItem) => {
  const result = await db.push(item);
  return result.key;
};

interface UpdateProps {
  id: string;
  completed: boolean;
}

export const updateItem = async ({id, completed}: UpdateProps) => {
  await db.child(`${id}`).update({completed: completed});
};

export const deleteItem = async (id: string) => {
  await db.child(id).remove();
};
