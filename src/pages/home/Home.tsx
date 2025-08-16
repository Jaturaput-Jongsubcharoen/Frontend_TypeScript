import axios from "axios";
import { useEffect, useState } from "react";

// IMPORTANT! define the shape of the backend JSON - Yeah!
interface BackendResponse {
  frontend_url: string;
  message: string;
}

function Home() {
  const [backendData, setBackendData] = useState<string>("");

  const fetchAPI = async () => {
    try {
      const response = await axios.get<BackendResponse>(
        `${import.meta.env.VITE_BACKEND_APP_URL}/python`
      );
      console.log("This message is from Python app.py", response.data.message);
      setBackendData(response.data.message);
    } catch (error) {
      console.error("Error fetching from backend:", error);
      setBackendData("Failed to reach backend");
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {backendData ? <p>{backendData}</p> : null}
    </div>
  );
}

export default Home;