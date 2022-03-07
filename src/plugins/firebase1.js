// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
  apiKey: "AIzaSyCgBoErPQU8QzkcUTD882FM6vqNfQHhhrw",
  authDomain: "lab-database-4647c.firebaseapp.com",
  projectId: "lab-database-4647c",
  storageBucket: "lab-database-4647c.appspot.com",
  messagingSenderId: "445741585178",
  appId: "1:445741585178:web:7a28097709ca42b9f392a3",
  measurementId: "G-RXC2CDHCT6"
  
});

const db = getFirestore(firebaseApp);
export default db;