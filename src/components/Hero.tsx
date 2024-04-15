import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// const API_KEY = "qfOWfkJtpXgrET2eHXbyagjS9trMUzL7ARYJvYfj";
let searchWord = "nebula";
let page = 1;
const URL = `https://images-api.nasa.gov/search?q=${searchWord}&media_type=image&page=${page}`;

const Hero: React.FC = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(URL);
        const data = response.data;
        const images = data.collection.items.map((item: string[]) => item);
        images.filter((item: any) =>
          item.data[0].description.toLowerCase().includes(searchWord)
        );
        setImages(images);
      };
      fetchData();
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }, []);

  if (!images.length) {
    return (
      <h1 className="lg:text-4xl md:text-2xl text-sm flex justify-center items-center m-4 p-4 md:m-10 md:p-20 indie-flower-regular">
        Loading...
      </h1>
    );
  }

  return (
    <>
      <div className="grid w-fit md:grid-cols-3 2xl:grid-cols-4 grid-cols-1 grid-flow-row gap-6 m-4 overflow-hidden">
        {images.map((image: any, index) => (
          <div className="flex flex-col mb-6 overflow-hidden items-center w-full h-96 hover:scale-125 transition-transform duration-500">
            <h1 className="p-2 text-center bottom-border-2 overflow-hidden border-b-2 hover:w-full">
              {image.data[0].title}
            </h1>
            <img
              key={index}
              src={image.links[0].href}
              alt="Nasa Space image"
              className="h-full object-contain w-full rounded overflow-hidden duration-500"
            />
          </div>
        ))}
      </div>
    </>
  );
  
};

export default Hero;
