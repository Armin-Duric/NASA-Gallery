import axios from "axios";
import { useEffect, useState } from "react";

interface PodData {
  title: string;
  url: string;
  explanation: string;
  media_type: string;
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


    const [isFullScreen, setIsFullScreen] = useState(false);
  
    const toggleFullScreen = () => {
      const mediaContainer:any = document.getElementById('media-container')
      if (!isFullScreen) {
        mediaContainer.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      setIsFullScreen(!isFullScreen);
    };

  if (!podData) {
    return (
      <div className="flex m-6 p-6 justify-center items-center text-3xl">
        Loading...
      </div>
    );
  }

  if (podData.media_type === "video") {
    return (
      <div className="w-2/2 h-fit flex flex-col justify-center items-center m-4 overflow-hidden">
        <h1 className="m-4 md:text-3xl text-lg text-center font-semibold text-center">
          {podData.title}
        </h1>
        <embed
          src={podData.url}
          className="h-fit w-4/6 justify-center m-6 rounded-lg drop-shadow-[0_0px_80px_rgba(61,112,123,0.7)] video-height"
        />
        <p className="w-5/6 xl:w-4/6 md:text-xl text-md mb-6">
          {podData.explanation}
        </p>
      </div>
    );
  }

  return (
    <div className="w-2/2 h-fit flex flex-col justify-center items-center m-4 ">
      <h1 className="m-4 text-xl md:text-3xl font-semibold text-center">
        {podData.title}
      </h1>
      <img
        src={podData.url}
        alt={podData.title}
        onClick={toggleFullScreen}
        className="h-fit xl:w-4/6 w-5/6 m-4 md:w-4/6 justify-center m-6 rounded-lg drop-shadow-[0_0px_80px_rgba(61,112,123,0.7)]"
        id="media-container"
      />
      <p className="w-5/6 xl:w-4/6 text-md md:text-xl mb-6">{podData.explanation}</p>
    </div>
  );
};

export default Pod;
