// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyAwlhueDQdVYwyAoLnuKdtve6Jxfwe7pIs",
  authDomain: "wineparingapp.firebaseapp.com",
  projectId: "wineparingapp",
  storageBucket: "wineparingapp.firebasestorage.app",
  messagingSenderId: "523786330656",
  appId: "1:523786330656:web:f333fac88d575bd40cd245",
  measurementId: "G-6XW2HYHSG4"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app);

export { auth };
