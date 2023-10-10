import React from "react";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
function Authors() {
  return (
    <div className="wd-100 text-white bg-dark py-5 mb-5">
      <div className="container pt-5">
        <div className="row d-flex justify-content-center ">
          <div className="col-10 font-floripa mb-5">
            <h1>Авторы курса</h1>
          </div>
          <div className="col-5 mt-3 d-flex justify-content-center">
            <SensorOccupiedIcon sx={{ fontSize: 300 }} />
          </div>
          <div className="col-5 mt-3 d-flex justify-content-center">
            <SensorOccupiedIcon sx={{ fontSize: 300 }} />
          </div>
        </div>
        <div className="row d-flex justify-content-center ">
          <div className="col-5 mt-5   ">
            <h3 className="mb-4">Никита Александрович Богословский</h3>
            <h5>
              Учитель физики академического лицея «Физико-техническая школа» им.
              Ж. И. Алфёрова. Председатель жюри экспериментального тура
              регионального этапа ВсОШ по физике. Автор книги «Физический кружок
              для шестиклассников и семиклассников». Кандидат
              физико-математических наук
            </h5>
          </div>
          <div className="col-5 ps-5  mt-5 ">
            <h3 className="mb-4">Иван Викторович Демидов</h3>
            <h5>
              Преподаватель Городского центра физического образования при
              академическом лицее «Физико-техническая школа» им. Ж. И. Алфёрова
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authors;
