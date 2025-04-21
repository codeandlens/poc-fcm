import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-NYSiVbmYMPS-tNpixEqfF_cnyCy3xVs",
  authDomain: "dev-poc-filebase.firebaseapp.com",
  projectId: "dev-poc-filebase",
  storageBucket: "dev-poc-filebase.firebasestorage.app",
  messagingSenderId: "367197170682",
  appId: "1:367197170682:web:dba1739766ddeb99681243",
  measurementId: "G-693VBKQB53"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };




