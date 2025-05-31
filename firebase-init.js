
// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, child, get, set, increment, update } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCqqo7oIMhUCt7iNrS4XJ4MEpjTmDr4_s",
  authDomain: "majeonenglishapp.firebaseapp.com",
  databaseURL: "https://majeonenglishapp-68230-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "majeonenglishapp-68230",
  storageBucket: "majeonenglishapp-68230.appspot.com",
  messagingSenderId: "973502210144",
  appId: "1:973502210144:web:d7789640b14d949a59a305"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, child, get, set, increment, update };
