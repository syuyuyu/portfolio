import { createGlobalStyle } from "styled-components";
import instagram from "../../../src/assets/icons/instagram.svg"
import line from "../../../src/assets/icons/line.svg"
// import "@fontsource/montserrat"; // 數字字型 Defaults to weight 400.
// import "@fontsource/noto-sans-tc"; //中英文字型 Defaults to weight 400.
// import imgMain from 'http://i.imgur.com/sMc7MQZ.jpg';
// [url=https://imgur.com/sMc7MQZ][img]http://i.imgur.com/sMc7MQZ.jpg[/img][/url]

export const ResetStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
address, caption, cite, code, dfn, em, strong, th, var, b {
  font-weight: normal;
  font-style: normal;
}
abbr, acronym {
  border: 0;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  text-size-adjust: 100%;
  box-sizing: border-box;
}
body {
    line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
q {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
caption, th {
  text-align: left;
}
textarea {
  resize: none;
}
a {
  text-decoration: none;
  cursor: pointer;
}
button {
  padding: 0;
  border: none;
  background: none;
}
`;

export const GlobalStyle = createGlobalStyle`
:root{
  --color-white:#FFFFFF;
  --color-black: #000000;
  --color-dark80:#393939;
  --color-dark70:#545454;
  --color-dark60:#777777;
  --color-dark40:#adadad;
  --color-dark20:#e0e0e0;
  --color-warm:#fff3e4;
  --svg-instagram: url(${instagram});
  --svg-line: url(${line});
}


html,body {
  font-family: monospace;
  box-sizing: border-box;
  font-size: 16px;
  @media (min-width: 576px) {
    
  }
  @media (min-width: 768px) {
    
  }
  @media (min-width: 992px) {
    
  }
  @media (min-width: 1200px) {
    
  }
}
h1{
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  /* line-height: 55px; */
  /* identical to box height, or 115% */
  @media (min-width: 768px) {
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    /* line-height: 70px; */
  }
  @media (min-width: 992px) {
    font-style: normal;
    font-weight: 700;
    font-size: 68px;
    /* line-height: 78px; */
  }
}
h2{
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  /* line-height: 40px; */
  /* identical to box height, or 124% */
  @media (min-width: 768px) {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    /* line-height: 45px; */
  }
  @media (min-width: 992px) {
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    /* line-height: 52px; */
  }
}
h3{
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    /* line-height: 26px; */
    /* identical to box height, or 93% */
    @media (min-width: 768px) {
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      /* line-height: 33px; */
    }
    @media (min-width: 992px) {
      font-style: normal;
      font-weight: 700;
      font-size: 33px;
      /* line-height: 38px; */
    }
}
h4{
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  /* line-height: 26px; */
  /* identical to box height, or 108% */
  @media (min-width: 768px) {
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    /* line-height: 26px; */
  }
  @media (min-width: 992px) {
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    /* line-height: 32px; */
  }
}
h5{
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  /* line-height: 26px; */
  /* identical to box height, or 144% */
  @media (min-width: 992px) {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    /* line-height: 24px; */
  }

}
`;


