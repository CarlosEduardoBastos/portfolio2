import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #193140;
  .header_item {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .header_text {
      max-width: 500px;
      margin: 10px;
      h1 {
        color: #fff;
        font-family: Helvetica;
        font-size: 2rem;
        margin: 10px 0px;
      }
      p {
        color: #fff;
        font-family: "Times New Roman", Times, serif;
        font-size: 1.1rem;
        margin: 5px 0px;
      }
      a {
        text-decoration: none;
        margin: 10px 10px 0px 0px;
        color: #99d8ff;
      }
      .lottie {
        max-width: 500px;
      }
    }
  }
`;
