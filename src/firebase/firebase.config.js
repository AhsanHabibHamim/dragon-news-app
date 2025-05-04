// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAajMClJ0ovVEIB4N-B8hp8Z1-8jVG4VAk",
  authDomain: "dragon-news-app-cfe00.firebaseapp.com",
  projectId: "dragon-news-app-cfe00",
  storageBucket: "dragon-news-app-cfe00.firebasestorage.app",
  messagingSenderId: "677006699007",
  appId: "1:677006699007:web:4f400526545426ad01dfca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;