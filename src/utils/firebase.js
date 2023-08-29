// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEYq8tUIDKfHfMkabhP-iyqlWjEpF4WhU",
  authDomain: "netflix-gpt-ec176.firebaseapp.com",
  projectId: "netflix-gpt-ec176",
  storageBucket: "netflix-gpt-ec176.appspot.com",
  messagingSenderId: "407864511557",
  appId: "1:407864511557:web:792235856c53b2d729272c",
  measurementId: "G-HT79FWFFJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);