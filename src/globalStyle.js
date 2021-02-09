import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #3c484e;
    font-family: 'Coming Soon', cursive;
  }
  @keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;