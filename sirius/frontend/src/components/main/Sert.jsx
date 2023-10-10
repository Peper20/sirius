import React from "react";
import ContactPageIcon from "@mui/icons-material/ContactPage";
function Sert() {
  return (
    <div className="wd-100 text-white bg-dark py-5 pe-4">
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-8 mb-4">
            <h3 className="text-transparents blue-to-green-light font-floripa">
              Получите сертификат Сириус.Курсов
            </h3>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-4 ">
            <ContactPageIcon sx={{ fontSize: 400 }} />
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div className="">
              <h5>
                Сертификат получат ученики, у которых есть зачёт по всем модулям
                курса. Решите верно все упражнения, чтобы получить сертификат с
                отличием. Ваш сертификат всегда будет храниться на странице
                «Сертификаты». Вы можете скачать его, распечатать или отправить
                ссылку на электронную версию.
              </h5>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Sert;
