import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3ukmYM7UNn6Rbl38WlljkPy2-8JkCR24",
    authDomain: "leeman-91dfe.firebaseapp.com",
    projectId: "leeman-91dfe",
    storageBucket: "leeman-91dfe.appspot.com",
    messagingSenderId: "185221032235",
    appId: "1:185221032235:web:b880aea181e15ee35c3d6e",
    measurementId: "G-L3JJN4SK78"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
const analytics = getAnalytics(app);