import React from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
function About() {
  return (
    <div className="wd-100 mt-5  ">
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-10 text-center mt-4 mb-5">
            <h2>Курс посвящён основным законам геометрической оптики</h2>
          </div>
          <div className="col-5">
            <AddPhotoAlternateIcon sx={{ fontSize: 400 }} />
          </div>
          <div className="col-5 d-flex justify-content-center align-items-center pb-4">
            <h5>
              На курсе вы познакомитесь с законами отражения, преломления и
              прямолинейного распространения света в оптически однородных
              средах.
              <br /> Особое внимание уделяется образованию изображений в
              зеркалах, линзах и других оптических системах. Курс будет полезен
              не только восьмиклассникам, но и всем, кто уже знаком с азами
              оптики
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
