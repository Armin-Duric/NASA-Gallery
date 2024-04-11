import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// const API_KEY = "qfOWfkJtpXgrET2eHXbyagjS9trMUzL7ARYJvYfj";
const URL = `https://images-api.nasa.gov/search?keywords=nebula`;

const Hero: React.FC = () => {
  const [heroData, setHeroData] = useState<string[]>([]);
  const [titles, setTitles] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(URL);
      const data = response.data;
      const urls = data.collection.items.map((item: any) => item.links[0].href);
      const titles = data.collection.items.map(
        (item: any) => item.data[0].title
      );
      setHeroData(urls);
      setTitles(titles);
    };
    fetchData();
  }, []);

  if (!heroData) {
    <div>Loading...</div>;
  }

  return (
    <div className="grid w-full md:grid-cols-3 2xl:grid-cols-4 grid-cols-2 grid-flow-row gap-6 m-4 overflow-hidden">
      {heroData.map((image, index) => (
        <div className="flex flex-col border-4 w-auto h-96 box-border mb-6 overflow-hidden click:row-span-2 click:col-span-2 hover:w-full hover:h-min">
          <h1 className="p-2 text-center">{titles[index]}</h1>
          <img
            key={index}
            src={image}
            alt="Nasa Space image"
            className="w-96 h-full hover:w-full overflow-hidden"
          />
        </div>
      ))}
    </div>
  );
};

export default Hero;
