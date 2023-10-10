import React from "react";

function SecondPage() {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row d-flex justify-content-center py-2">
          <div className="col-8">
            <h1 className="text-transparents blue-to-green font-floripa mb-4">
              О нас
            </h1>
            <h5>
              <p>
                <span className="text-transparents blue-to-green">
                  Сириус.Курсы
                </span>
                — это онлайн-школа дополнительного образования.
              </p>
              <p>
                Здесь учатся школьники и учителя, студенты вузов и все, кто
                хочет изучить предметы за пределами{" "}
                <span className="text-transparents blue-to-green">
                  {" "}
                  школьной программы
                </span>{" "}
                и разобраться в{" "}
                <span className="text-transparents blue-to-green">
                  сложных задачах.{" "}
                </span>
              </p>
              <p>
                Ученики{" "}
                <span className="text-transparents blue-to-green">
                  самостоятельно
                </span>{" "}
                выстраивают индивидуальную траекторию, определяют темп и удобное
                время учёбы.
              </p>
              <p>
                В онлайн-школе доступны курсы по математике, информатике,
                физике, химии, биологии, лингвистике, искусственному интеллекту.
              </p>
              <p>
                {" "}
                <span className="text-transparents blue-to-green">
                  Обучение бесплатное{" "}
                </span>
                — выбирайте один или несколько курсов и погружайтесь в науку!
              </p>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
