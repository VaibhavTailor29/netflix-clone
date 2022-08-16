// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDstmEzGHB10Rme6biK2gqFGI3Vk1F1uFo",
    authDomain: "netflix-clone-67831.firebaseapp.com",
    projectId: "netflix-clone-67831",
    storageBucket: "netflix-clone-67831.appspot.com",
    messagingSenderId: "56429241252",
    appId: "1:56429241252:web:75d420b2c2878019165731",
    measurementId: "G-N7P2JRVNKF"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;