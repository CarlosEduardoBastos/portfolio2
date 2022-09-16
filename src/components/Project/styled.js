import styled from "styled-components";

export const Content = styled.main`
  width: 100%;

  .carousel_corpo {
    max-width: 960px;
    margin: 30px auto;

    h1 {
      text-align: center;
      font-size: 2rem;
    }
  }

  .container-like{
    padding: 26px 0px;
    .link-site {
      text-decoration: none;
      color: #99d8ff;
      background-color: #193140;
      padding: 16px;
      
      &:hover{
        color: #193140;
        background-color: #fff;
        transition: 0.7s;
        border: 1px solid #193140;
      }
    }
  }
`;
