import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0s_ABKFw51VS-OJMI9UDOwPIQUZQptBU",
  authDomain: "jmgonlineportfolio.firebaseapp.com",
  projectId: "jmgonlineportfolio",
  storageBucket: "jmgonlineportfolio.appspot.com",
  messagingSenderId: "458278404634",
  appId: "1:458278404634:web:72507479f254c4076f07a3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
