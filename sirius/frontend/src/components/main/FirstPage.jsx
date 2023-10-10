import React from "react";

function First() {
  return (
    <div className="bg-first">
      <div className="container text-start ">
        <div className="row h-100vh d-flex justify-content-center align-items-center pt-5">
          <div className="col-10">
            <div className="row mb-4">
              <div className=" bg-white  py-4 px-5 border-ios">
                <div className="">
                  <h1 className="text-start text-balance">
                    Онлайн-курсы Образовательного центра Сириус
                  </h1>
                </div>
              </div>
            </div>
            <div className="row mb-1">
              <div className="col-9 bg-white py-4  px-5 border-radius-20">
                <h5 className="text-width-300 mb-0 text-balance">
                  Продвинутые курсы для школьников, учителей и всех желающих.
                  <br />
                  Если вы уверенно знаете школьную программу и хотите изучать
                  предметы углублённо — присоединяйтесь к Сириус.Курсам.
                </h5>
              </div>
            </div>
            <div className="row pt-3 px-0">
              <div className="col-2 ps-0">
                <button
                  className="w-100 btn  bg-yellow btn-lg btn-primary hover-aquamarine"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
              <div className="col-2 ps-0 ms-1">
                <a
                  href="./register"
                  className="w-100 btn btn-lg bg-green btn-outline-primary hover-aquamarine"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
