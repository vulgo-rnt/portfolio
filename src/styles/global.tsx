import { css } from "@emotion/react";

const global = css`
  :root {
    --color-text-default: #252525;
    --bg-card-primary: #d2e6f8;
    --bg-card-secondary: yellow;
  }

  body {
    height: 3000px; //test scroll
    color: #252525;
    overflow-x: hidden;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-size: 20px;
    font-family: "inter";
  }

  //import fonts
  @font-face {
    font-family: "tag";
    src: url("font/StreetGraffity.ttf");
  }
  @font-face {
    font-family: "inter";
    src: url("font/Inter.ttf");
  }

  //scrollbar
  * {
    scrollbar-width: thin;
    scrollbar-color: grey transparent;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: grey;
  }
`;

export default global;
