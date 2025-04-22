import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAOwKbD8GI0eMiKTiSCB3_yrUHLKHLIfOk",
  authDomain: "siph-scom.firebaseapp.com",
  projectId: "siph-scom",
  messagingSenderId: "606274732206",
  appId: "1:606274732206:web:42bb19977644c49331ad3f"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };