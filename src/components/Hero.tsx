import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import searchBar from "./SearchBar";

// const API_KEY = "qfOWfkJtpXgrET2eHXbyagjS9trMUzL7ARYJvYfj";
let searchWord = "milkey way";
let page = 1;
const URL = `https://images-api.nasa.gov/search?q=${searchWord}&media_type=image&page=${page}`;

const Hero: React.FC = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(URL);
        const data = response.data;
        const images = data.collection.items.map((item: any) => item);
        setImages(images);
      };
      fetchData();
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }, []);
  const filteredImages = images.filter((item) =>
    item.data[0].description.toLowerCase().includes(searchWord)
  );

  if (!filteredImages) {
    return <h1>Loading...</h1>;
  } else if (filteredImages.length === 0) {
    return (
      <img
        src="../../public/assets/images/404.png"
        alt="Sorry, there is nothing here..."
        className="w-full h-full object-contain"
      />
    );
  } else {
    return (
      <div className="grid w-fit md:grid-cols-3 2xl:grid-cols-4 grid-cols-2 grid-flow-row gap-6 m-4 overflow-hidden">
        {filteredImages.map((image, index) => (
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
    );
  }
};

export default Hero;
