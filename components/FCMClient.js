'use client';

import { useEffect } from "react";
import { messaging, getToken, onMessage } from "../lib/firebase";

export default function FCMClient() {
  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          getToken(messaging, {
            vapidKey: "BC3zVLRv_OVMWZ7UBb--UBY95AnGrWctKhWSJNQ3qlR6X03Im6C3hQofKnE3mJFTryUL3K21parJ20wjz8o-Cgw"
          })
            .then((currentToken) => {
              if (currentToken) {
                console.log("FCM Token:", currentToken);
              } else {
                console.log("No registration token available.");
              }
            })
            .catch((err) => {
              console.log("An error occurred while retrieving token. ", err);
            });

          onMessage(messaging, (payload) => {
            console.log("Message received. ", payload);
            alert(`Notification: ${payload.notification.title}`);
          });
        }
      });
    }
  }, []);

  return null;
}