import React from "react";
import Tour from "./Tour";

const Tours = ({ toursProp, removeTour }) => {
  return (
    <div className="py-5">
      <section>
        <div className="flex justify-center mb-16">
          <h2 className="pb-3 text-3xl font-bold relative">
            Our Tours
            <span className="absolute bottom-0 left-5 right-5 h-[3px] bg-[#10b981]"></span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2  xl:grid-cols-3  gap-5 ">
          {toursProp.map((tour) => {
            return (
              <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Tours;
