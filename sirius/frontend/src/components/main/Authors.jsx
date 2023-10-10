import React from "react";

function Authors() {
  return (
    <div className="wd-100 text-white bg-dark pt-2 ">
      <div className="container py-5 my-5">
        <div className="row d-flex justify-content-center pb-4">
          <div className="col-8">
            <h1 className="text-transparents blue-to-green-light font-floripa mb-4">
              Кто создаёт{" "}
              <span className="text-transparents blue-to-green-light">
                Сириус.Курсы
              </span>
            </h1>
            <h5>
              <p>
                Над созданием и сопровождением{" "}
                <span className="text-transparents blue-to-green-light">
                  Сириус.Курсов
                </span>{" "}
                работает больше 100 авторов и методистов — это{" "}
                <span className="text-transparents blue-to-green-light">
                  лучшие преподаватели школ и вузов
                </span>
                , тренеры и наставники победителей и призёров всероссийских и
                международных олимпиад, учёные и популяризаторы науки.
              </p>
              <p>
                Вы можете встретить их на{" "}
                <span className="text-transparents blue-to-green-light">
                  очных программах
                </span>{" "}
                Образовательного центра «Сириус», за кафедрами вузов, на
                конференциях, в роликах просветительских каналов о науке и на
                <span className="text-transparents blue-to-green-light">
                  Сириус.Курсах!
                </span>
              </p>
            </h5>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-10 mt-4 pb-4">
            <img className="wd-100pr" src="/img/Untitled-1.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authors;
