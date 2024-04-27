import { useState, useEffect } from "react";
import axios from "axios";

const Hero: React.FC = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchWord, setSearchWord] = useState("nebula");
  const [nextPage, setNextPage] = useState(true);

  const URL = `https://images-api.nasa.gov/search?q=${searchWord}&media_type=image&page=${page}`;

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      const response = await axios.get(URL);
      const data = response.data;
      const images = data.collection.items.map((item: string[]) => item);
      images.filter((item: any) =>
        item.data[0].description.toLowerCase().includes(searchWord)
      );
      const pages = data.collection.links[0];
      setNextPage(pages);
      setImages(images);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [, setSelectedImageIndex] = useState<number | null>(null);

  const handleSearchWord = (event: any) => {
    setSearchWord(event.target.value);
  };

  const handleSearchSubmit = () => {
    fetchData();
  };

  const handleNextPage = () => {
    if (!nextPage) {
      setPage(1);
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const toggleFullScreen = (index: number) => {
    const mediaContainer = document.getElementById(index.toString());
    if (!isFullScreen) {
      mediaContainer?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
    setSelectedImageIndex(index);
  };

  if (!images.length) {
    return (
      <h1 className="lg:text-4xl md:text-2xl text-md flex justify-center items-center m-4 p-4 md:m-10 md:p-20">
        Loading...
      </h1>
    );
  }

  return (
    <>
      <div className="flex justify-center m-2 p-2 w-full">
        <input
          type="text"
          value={searchWord}
          className=" text-lg mx-4 w-4/6 px-2 bg-stone-950 border-b-2 rounded-md shadow h-10 shadow-2xl shadow-blue-500 bg-blend-normal"
          onChange={handleSearchWord}
        />
        <button
          onClick={handleSearchSubmit}
          className="text-md lg:text-2xl font-medium shadow-2xl border-b-2 cursor-pointer hover:shadow-blue-500 bg-blend-normal duration-300 transition hover:text-red-600"
        >
          Search
        </button>
      </div>
      <div className="grid w-fit md:grid-cols-3 2xl:grid-cols-4 grid-cols-1 grid-flow-row gap-6 m-4 overflow-hidden">
        {images.map((image: any, index) => (
          <div className="flex flex-col mb-6 overflow-hidden items-center w-full h-96 hover:scale-125 transition-transform duration-500">
            <h1 className="p-2 text-center bottom-border-2 overflow-hidden border-b-2 hover:w-full platypi">
              {image.data[0].title}
            </h1>
            <img
              key={index}
              src={image.links[0].href}
              alt="Nasa Space image"
              className="h-full object-contain w-full rounded overflow-hidden duration-500"
              id={`${index}`}
              onClick={() => toggleFullScreen(index)}
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleNextPage}
        className="m-6 p-6 flex justify-center w-full transition duration-500 hover:scale-125"
      >
        Next Page
      </button>
    </>
  );
};

export default Hero;
