// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh1LIuv5IeQme45kXq_Lhuk4oGc8DeMtE",
  authDomain: "assignment-11-894b0.firebaseapp.com",
  projectId: "assignment-11-894b0",
  storageBucket: "assignment-11-894b0.appspot.com",
  messagingSenderId: "263323467004",
  appId: "1:263323467004:web:600cc0f22ebfd090212b79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); 

export default auth;


// apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId