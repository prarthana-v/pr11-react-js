import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD0k_lGgC6O23mxZkXTPrXIf88mk17pjPo",
  authDomain: "student-crud-45444.firebaseapp.com",
  databaseURL: "https://student-crud-45444-default-rtdb.firebaseio.com",
  projectId: "student-crud-45444",
  storageBucket: "student-crud-45444.appspot.com",
  messagingSenderId: "882806213899",
  appId: "1:882806213899:web:cad295b5cf90d994d2260e",
  measurementId: "G-TJ07G8RRN5",
};

export const app = initializeApp(firebaseConfig);
