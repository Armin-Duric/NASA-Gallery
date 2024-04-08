import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

interface HeroData {
  data: object;
  links: object;
}
const URL = `https://images-api.nasa.gov/search?keywords=orion nebula?api_key=${API_KEY}`;
const API_KEY = "qfOWfkJtpXgrET2eHXbyagjS9trMUzL7ARYJvYfj";

const Hero: React.FC = () => {
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await axios.get(URL);
        setHeroData(response.data);
      } catch (err) {
        console.error("Error fetching Picture Of The Day:", err);
      }
    };

    fetchHeroData();
  }, []);

    if(!heroDataData) {
        return <div>Loading...</div>
    };

    return (
        <div className="h-fit flex border-2">
            <h1>{heroData?.data[].title}</h1>
            <img src={heroData?.links[0].href} alt={podData.title} height="100px" />
            {/* <p>{podData.explanation}</p> */}
        </div>
    );
};

export default Hero;
