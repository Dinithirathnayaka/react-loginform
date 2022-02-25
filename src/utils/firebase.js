import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAdXQkm9cG2BfmBp5-hYwJgG6MFAMk9JA4",
  authDomain: "loginform-e3a68.firebaseapp.com",
  databaseURL: "https://loginform-e3a68-default-rtdb.firebaseio.com",
  projectId: "loginform-e3a68",
  storageBucket: "loginform-e3a68.appspot.com",
  messagingSenderId: "341793841667",
  appId: "1:341793841667:web:a4836cdbda9a6caaeae436",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app, firebaseConfig.databaseURL);

export { db };
