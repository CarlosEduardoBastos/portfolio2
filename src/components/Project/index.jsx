import React from "react";
import ComponentCarousel from "../ComponentCarousel";
import { Content } from "./styled";


const Project = () => {
  return (
    <Content>
      <section className="carousel_corpo">
        <h1>Projeto</h1>
        <ComponentCarousel />
        <div className="container-like">
          <a href="https://carloseduardobastos.github.io/restaurante/" className="link-site">Link do Projeto</a>
        </div>
      </section>
    </Content>
  );
};

export default Project;
