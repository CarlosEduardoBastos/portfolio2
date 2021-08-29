import React from "react";
import { HeaderContainer } from "../style/Header.style";

const Header = () => {
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
        </section>
      </section>
    </HeaderContainer>
  );
};

export default Header;
