/*import { useState } from "react";
import dynamic from "next/dynamic";

const FCMClient = dynamic(() => import("../components/FCMClient"), { ssr: false });

export default function Home() {
  const [fcmToken, setFcmToken] = useState("");

  return (
    <div>
      <h3>FCM Notification Web App</h3>
      <FCMClient onTokenReceived={setFcmToken} />
      {fcmToken && (
        <p>
          <strong>Your FCM Token:</strong> <br />
          <code>{fcmToken}</code>
        </p>
      )}
    </div>
	//path html
  );
}
*/


import { useState } from "react";
import dynamic from "next/dynamic";

const FCMClient = dynamic(() => import("../components/FCMClient"), { ssr: false });

export default function Home() {
  const [vn, setVn] = useState("");
  const [showQueue, setShowQueue] = useState(false);
  const [fcmToken, setFcmToken] = useState("");
  const [queueNumber, setQueueNumber] = useState("");
  const [queueCount, setQueueCount] = useState("");

  const handleVNChange = (e) => {
    const value = e.target.value;
	
    setVn(value);
	if(value === "VN00001"){
		setShowQueue(true);
		setQueueNumber("A030");
		setQueueCount("05");
	}else if(value === "VN00002"){
		setShowQueue(true);
		setQueueNumber("A031");
		setQueueCount("06");
	}else{
		setShowQueue(false);
	}
     // show เมื่อมีค่ากรอก
  };

  return (
    <div className="container">
      <div className="title">Orthopedic <br />Queue Monitor</div>

      <div className="form-group">
        <label className="label" htmlFor="vn">VN</label>
        <input type="text" id="vn" value={vn} onChange={handleVNChange} placeholder="กรอก VN" />
      </div>

	{showQueue && (
      <div className="queue-box">
        <div className="current-queue">คิวปัจจุบัน</div>
        <div className="queue-number">{queueNumber}</div>
        <div className="waiting-info">
          <span>มีคิวก่อนหน้า :</span>
          <span className="waiting-count">{queueCount}</span>
          <span>คิว</span>
        </div>
      </div>
	) }
      <hr style={{ margin: "20px 0" }} />
      <FCMClient onTokenReceived={setFcmToken} />
      {fcmToken && (
        <p>
          <strong>Your FCM Token:</strong> <br />
          <code>{fcmToken}</code>
        </p>
      )}

      <style jsx>{`
        .container {
          background-color: white;
          border-radius: 10px;
          padding: 20px;
          width: 720px;
          margin: 40px auto;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          font-family: sans-serif;
          background-color: #f0f0f0;
          color: #1e3a8a;
        }
        .title {
          text-align: center;
          font-weight: bold;
          font-size: 1.2rem;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .label {
          font-weight: bold;
          display: block;
          margin-bottom: 5px;
        }
        input[type="text"] {
          width: 100%;
          padding: 8px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .queue-box {
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 15px;
          background-color: #fafafa;
        }
        .current-queue {
          text-align: center;
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .queue-number {
          text-align: center;
          font-size: 3rem;
          color: #bea06a;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .waiting-info {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }
        .waiting-count {
          color: #cf4d10;
        }
      `}</style>
    </div>
  );
}
