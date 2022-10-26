import { createGlobalStyle } from "styled-components/macro";
import img from '/public/images/world.jpeg'
const GlobalStyle = createGlobalStyle `

    *{
        margin: 0;
        padding: 0;
    }
    body {
        
        font-family: 'Poppins';
        background-image: url(${img});
        background-repeat: no-repeat;
        background-size: cover;
        }
    `;
    
export default GlobalStyle;