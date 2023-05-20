import React from "react";
import { Img, ImgWrap } from "./style";

const BodySection = () => {
  const img = require("../../images/marais_salants.jpg");

  return (
    <div>
      <ImgWrap>
        <Img src={img} alt="Marais salants" />
      </ImgWrap>
    </div>
  );
};

export default BodySection;
