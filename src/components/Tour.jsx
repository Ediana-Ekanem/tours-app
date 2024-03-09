import React, { useState } from "react";

const Tour = ({ id, image, name, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article key={id} className="bg-white shadow-lg w-[400px] rounded relative">
      <img
        src={image}
        alt={name}
        className="w-full h-[300px] object-cover rounded"
      />

      <footer className="p-5 ">
        <div className="flex  justify-center">
          <h4 className="font-semibold text-xl p-3 text-center">{name}</h4>
          <div className="absolute top-0 right-0">
            <h4 className="text-white bg-[#10b981] font-semibold rounded-r px-3 py-1">
              ${price}
            </h4>
          </div>
        </div>
        <p className="text-[#7d7d97]">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="text-blue-400 ms-2 "
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show Less" : " Read More"}
          </button>
        </p>
        <div className="flex justify-center p-5">
          <button
            //   Prop Drilling  Here
            className="border-2 border-[#73d4b4] text-[#73d4b4]  rounded w-full"
            onClick={() => removeTour(id)}
          >
            Not Interested
          </button>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
