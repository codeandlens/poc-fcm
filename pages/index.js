import dynamic from "next/dynamic";

const FCMClient = dynamic(() => import("../components/FCMClient"), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1>FCM Notification Web App</h1>
      <FCMClient />
    </div>
  );
}