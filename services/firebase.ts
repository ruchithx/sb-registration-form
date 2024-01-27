import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmHLI0othpo-51n0sMQesZT8hHm-a6PZ0",
  authDomain: "test-1-aa922.firebaseapp.com",
  databaseURL: "https://test-1-aa922-default-rtdb.firebaseio.com/",
  projectId: "test-1-aa922",
  storageBucket: "test-1-aa922.appspot.com",
  messagingSenderId: "290128348540",
  appId: "1:290128348540:web:a0880384d1b52f67f390f9",
  measurementId: "G-CWNTN7V56R",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const db = getFirestore(app);
export const db = getDatabase(app);
export const auth = getAuth(app);
