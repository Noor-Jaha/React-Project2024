// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeDq_7f63gEBP-nKt1_505eCT2l1R4wy0",
  authDomain: "https://fir-1-bc9ca-default-rtdb.firebaseio.com/",
  projectId: "fir-1-bc9ca",
  storageBucket: "fir-1-bc9ca.appspot.com",
  messagingSenderId: "690275827860",
  appId: "1:690275827860:web:4761a741dd4d69d0e1b481",
  measurementId: "G-4R0BZX2JSH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);