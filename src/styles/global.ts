import { createGlobalStyle } from 'styled-components';
import BackgroundImg from '../assets/background1.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    height: 100vh;
    background: url(${BackgroundImg}) no-repeat center;
    background-size: cover;
    color: #EBEBED;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
