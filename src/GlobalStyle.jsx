import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 @font-face {
  font-family: "Pretendard-Regular";
  src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 400;
  font-style: normal;
}

// border-box 초기화
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

// 공백 초기화
body,
button,
dd,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
input,
legend,
li,
ol,
p,
select,
table,
td,
textarea,
th,
ul,
figure,
figcaption {
  margin: 0;
  padding: 0;
}

// 폰트 초기화
body,
button,
input,
select,
table,
textarea {
  font-family: var(--mainfont-nanum), var(--mainfont-nexon),
    "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", helvetica, sans-serif;
}

// 링크 초기화
a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
}

// 스타일 초기화
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}

ul {
  list-style: none;
}

em,
address {
  font-style: normal;
}

strong {
  font-weight: normal;
}


// 디자인 초기화
input,
textarea,
button,
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
  font-size: 16px;
  border: 0;
}

// 스킵메뉴
#skip a {
  position: absolute;
  left: 10px;
  top: -92px;
  z-index: 100000;
  font-size: 1rem;
  padding: 10px 30px;
  color: var(--white);
  background: var(--black);
}

#skip a:focus,
#skip a:active {
  top: 10px;
}

// 글씨 숨기기
.blind {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

// IR(Image Replacement)
.ir {
  display: block;
  overflow: hidden;
  font-size: 0;
  line-height: 0;
  text-indent: -9999px;
  white-space: nowrap;
}

:root {
  font-family: "Pretendard-Regular";
  color: #232323;
}

`;
