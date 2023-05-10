// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxLHc9tJDTamosWZcpyI30dDQWr7Sei1A",
  authDomain: "caffee-store-crud.firebaseapp.com",
  projectId: "caffee-store-crud",
  storageBucket: "caffee-store-crud.appspot.com",
  messagingSenderId: "1032277385031",
  appId: "1:1032277385031:web:2bb5cf4130666a0e883662"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;