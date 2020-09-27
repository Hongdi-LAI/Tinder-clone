import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmWCsu1c-SGajrAWcl8ozwPV2pEtI4xOg",
  authDomain: "tinder-clone-b6bc7.firebaseapp.com",
  databaseURL: "https://tinder-clone-b6bc7.firebaseio.com",
  projectId: "tinder-clone-b6bc7",
  storageBucket: "tinder-clone-b6bc7.appspot.com",
  messagingSenderId: "282402936145",
  appId: "1:282402936145:web:95d6820097810d689faf70",
  measurementId: "G-V4BNDP363T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
