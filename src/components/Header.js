import React from "react";
import { HeaderContainer } from "../style/Header.style";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/36121-developer-at-work.json";

const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <HeaderContainer>
      <section className="header_item">
        <section className="header_text">
          <h1>Sobre</h1>
          <p>
            Meu nome é Carlos Eduardo, tenho 17 anos, comecei na área da
            programação aos 11 anos utilizando a linguagem python, mas o que me
            apaixonou foi o desenvolvimento web onde eu estou até hoje, no
            desenvolvimento web foi onde eu aprendi html, css, javascript e
            estou aprendendo react.js e next.js.
          </p>
          <p>Número: 55 74 999016923</p>
          <p>Email: carloseduardolimabastosm@gmail.com</p>
          <a href="https://www.linkedin.com/in/carlos-eduardo-lima-5638271ba/">
            Linkedin
          </a>
          <a href="https://github.com/CarlosEduardoBastos">Github</a>
        </section>

        <div className="lottie">
          <Lottie
            options={defaultOptions}
            height={300}
            width={350}
            title="Emad Moradian"
          />
        </div>
      </section>
    </HeaderContainer>
  );
};

export default Header;
