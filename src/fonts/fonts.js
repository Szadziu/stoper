import { createGlobalStyle } from "styled-components";

import Veneer from "./Veneer.woff";
import Veneer2 from "./Veneer.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: Veneer;
        src: local(Veneer), local(Veneer2),
        url(${Veneer2}) format('woff2'),
        url(${Veneer}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
