importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js");

firebase.initializeApp({  
  apiKey: "AIzaSyAOwKbD8GI0eMiKTiSCB3_yrUHLKHLIfOk",
  authDomain: "siph-scom.firebaseapp.com",
  projectId: "siph-scom",
  messagingSenderId: "606274732206",
  appId: "1:606274732206:web:42bb19977644c49331ad3f",
  
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});