import React from "react";

function OurBackground() {
  return (
    <div className="wd100 bg-dark">
      <div className="container py-5 my-5">
        <div className="row d-flex justify-content-center py-3">
          <div className="col-5">
            <h5 className="mb-4 text-white">
              К онлайн-школе уже присоединились более
            </h5>
            <h1 className="text-transparents blue-to-green-light font-floripa ">
              350 000
              <br />
              учеников
            </h1>
          </div>
          <div className="col-5">
            <h5 className="mb-4 text-white">Вместе они решили почти</h5>
            <h1 className="text-transparents blue-to-green-light font-floripa ">
              27 000 000
              <br />
              задач
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurBackground;
