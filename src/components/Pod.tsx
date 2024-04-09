import axios from "axios";
import { useEffect, useState } from "react";

interface PodData {
  title: string;
  url: string;
  explanation: string;
}

const API_KEY = "qfOWfkJtpXgrET2eHXbyagjS9trMUzL7ARYJvYfj";
const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

const Pod: React.FC = () => {
  const [podData, setPodData] = useState<PodData | null>(null);

  useEffect(() => {
    const fetchPodData = async () => {
      try {
        const response = await axios.get(URL);
        setPodData(response.data);
      } catch (err) {
        console.error("Error fetching Picture Of The Day:", err);
      }
    };

    fetchPodData();
  }, []);

  if (!podData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-2/2 h-fit flex flex-col justify-center items-center m-4 ">
      <h1 className="m-4 text-3xl font-semibold indie-flower-regular">
        {podData.title}
      </h1>
      <img
        src={podData.url}
        alt={podData.title}
        className="h-fit xl:w-2/6 w-1/2 justify-center m-6 rounded-lg drop-shadow-[0_0px_80px_rgba(61,112,123,0.7)]"
      />
      <p className="w-5/6 xl:w-4/6 text-xl mb-6">{podData.explanation}</p>
    </div>
  );
};

export default Pod;
