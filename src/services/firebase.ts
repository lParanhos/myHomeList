import * as Firebase from 'firebase';
import FirebaseConfig from '../../firebase-config';
import 'firebase/database';

const appName = 'HouseList';

const firebaseConfig = {
  ...FirebaseConfig.dev,
};

export const firebaseApp = Firebase.apps.length
  ? Firebase.app(appName)
  : Firebase.initializeApp(firebaseConfig, appName);
