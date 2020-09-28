import firebase from "firebase/app";
import "firebase/firebase-database";
import ReduxSagaFirebase from "redux-saga-firebase";

if (process.env.DATABASE !== undefined) console.log("set");

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: "https://portfolio-3f954.firebaseio.com",
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const myFirebaseApp = firebase.initializeApp(config);
const rsf = new ReduxSagaFirebase(myFirebaseApp);

export default rsf;
