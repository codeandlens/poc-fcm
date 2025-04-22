import { useState } from "react";
import dynamic from "next/dynamic";

const FCMClient = dynamic(() => import("../components/FCMClient"), { ssr: false });

export default function Home() {
  const [fcmToken, setFcmToken] = useState("");

  return (
    <div>
      <h1>FCM Notification Web App</h1>
      <FCMClient onTokenReceived={setFcmToken} />
      {fcmToken && (
        <p>
          <strong>Your FCM Token:</strong> <br />
          <code>{fcmToken}</code>
        </p>
      )}
    </div>
  );
}
