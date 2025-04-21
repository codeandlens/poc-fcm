importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD-NYSiVbmYMPS-tNpixEqfF_cnyCy3xVs",
  authDomain: "dev-poc-filebase.firebaseapp.com",
  projectId: "dev-poc-filebase",
  storageBucket: "dev-poc-filebase.firebasestorage.app",
  messagingSenderId: "367197170682",
  appId: "1:367197170682:web:dba1739766ddeb99681243",
  measurementId: "G-693VBKQB53"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
