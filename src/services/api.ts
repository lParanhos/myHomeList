import {firebaseApp} from './firebase';
import 'firebase/database';
import {HouseItem} from '../models/HouseItem';
import {parseFirebaseObjetToHomeItem} from '../utils/parse';

const db = firebaseApp.database().ref('/items');

export const getItems = async (): Promise<HouseItem[]> => {
  await firebaseApp.auth().signInAnonymously();

  const result = await db.once('value');
  const parsedValue = parseFirebaseObjetToHomeItem(result.val());
  return parsedValue;
};

export const setItem = async (item: HouseItem) => {
  await db.push(item);
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
