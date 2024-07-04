import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA4NkwjPg5xNysbOjsCzc4ocCmrUpC76Yg",
  authDomain: "login-f0b7c.firebaseapp.com",
  projectId: "login-f0b7c",
  storageBucket: "login-f0b7c.appspot.com",
  messagingSenderId: "2649210204",
  appId: "1:2649210204:web:1c1ba230b71fc02d2b5599",
  measurementId: "G-NVEKNK5R1Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export { auth, profileCollection, tasksCollection };
export default db;
