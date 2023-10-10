import React from "react";

import TextField from "@mui/material/TextField";
import CardCourse from "./CardCourse";

function Seach() {
  let course = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <div className="container">
        <div className="row my-5 pt-5">
          <div className="col-12">
            <div className="row d-flex justify-content-center mb-4">
              <div className="col-6">
                <h1 className="mb-4">Найдинеобходимый курс</h1>
                <TextField
                  className="mt-1 mb-5"
                  fullWidth
                  label="fullWidth"
                  id="fullWidth"
                  multiline
                  maxRows={4}
                />
              </div>
            </div>
            <div className="row">
              {course.map((e) => (
                <div key={e} className="p-2 mb-1 col-3 ">
                  <CardCourse />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seach;
