import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdRffkoVpX0wX5KnBWvjWuOGeiK-3anGk",
  authDomain: "personal-finance-tracker-c27dd.firebaseapp.com",
  projectId: "personal-finance-tracker-c27dd",
  storageBucket: "personal-finance-tracker-c27dd.appspot.com",
  messagingSenderId: "447902184446",
  appId: "1:447902184446:web:094ff3755211761273c6af",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
