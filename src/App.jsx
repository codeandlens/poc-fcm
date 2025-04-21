import React, { useEffect, useState } from 'react';
import { messaging, getToken, onMessage } from './firebase';

const App = () => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Request permission & get token
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        getToken(messaging, { vapidKey: 'BD7w5MC7PF6bdcKptLG84hdMTwBzSiZ7VAg_rJJV86NKupzZKBsibg1jW30zFP_I_fDtMflTovBYC5OuWLqgBi4' }).then((currentToken) => {
          if (currentToken) {
            console.log('FCM Token:', currentToken);
          } else {
            console.warn('No registration token available.');
          }
        });
      }
    });

    // Foreground messages
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      setNotification(payload.notification);
    });
  }, []);

  return (
    <div>
      <h1>React + Firebase Cloud Messaging</h1>
      {notification && (
        <div style={{ padding: '1rem', background: '#e0ffe0', marginTop: '1rem' }}>
          <h3>{notification.title}</h3>
          <p>{notification.body}</p>
        </div>
      )}
    </div>
  );
};

export default App;
