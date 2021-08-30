import React from "react";
import { Content } from "../style/Corpo.style";
import ControlledCarousel from "./ControlledCarousel";

const Corpo = () => {
  return (
    <Content>
      <section className="carousel_corpo">
        <h1>Projeto</h1>
        <ControlledCarousel />
      </section>
    </Content>
  );
};

export default Corpo;
