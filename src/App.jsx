import React, { useEffect, useState } from "react";
import axios from "axios";
import Botton from "./components/Botton";

const App = () => {
  let minLength = 10;
  const [imageData, setImageData] = useState([]);
  const [index, setIndex] = useState(1);

  const [loading, setLoading] = useState(true);
  const [loadingCount, setLoadingCount] = useState(0);

  const getData = async () => {
    setLoading(true);
    setLoadingCount(0);

    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setImageData(response.data);
  };

  const prevHandler = () => {
    if (index > 1) {
      setIndex(index - 1);
      setImageData([]);
    }
  };

  const nextHandler = () => {
    setIndex(index + 1);
    setImageData([]);
  };

  const handleImageLoad = () => {
    setLoadingCount((prev) => {
      const newCount = prev + 1;
      if (newCount === minLength) {
        setLoading(false);
      }
      return newCount;
    });
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="text-white bg-black w-full h-screen p-3 ">
      <div className="flex flex-row flex-wrap justify-around overflow-scroll lg:overflow-hidden gap-1.5  w-full lg:h-[calc(100%-12%)] h-[calc(100%-20%)] ">
        {loading &&
          Array.from({ length: minLength }).map((_, idx) => {
            return (
              <div
                key={idx}
                className="bg-gray-700 p-3 rounded-xl animate-pulse w-80 h-56 lg:w-56 lg:h-48"
              >
                <div className="bg-gray-100 w-full h-36  rounded-lg" />
                <div className="h-4 bg-gray-200 mt-2 rounded w-32 mx-auto" />
              </div>
            );
          })}

        {imageData.map((elem, idx) => {
          return (
            <div
              key={idx}
              className={`data-twe-lazy-load-init text-center ${
                loading ? "opacity-0 absolute" : "opacity-100"
              }`}
            >
              <a href={elem.url} target="_blank">
                <div className=" overflow-hidden bg-gray-300 rounded-2xl w-80 h-48 lg:w-56 lg:h-48">
                  <img
                    loading="lazy"
                    onLoad={handleImageLoad}
                    className="object-cover rounded-2xl border h-full w-full"
                    src={elem.download_url}
                  />
                </div>
                <h2 className="text-amber-50">{elem.author}</h2>
              </a>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-1.5 h-[12%] items-center">
        <Botton name="prev" 
          disabled={index === 1}
          onClick={prevHandler} />

          <h4 
          className="font-bold "
          >
            Page {index}
          </h4>
        <Botton 
          name="next"
          onClick={nextHandler} 
        />
      </div>
    </div>
  );
};

export default App;
