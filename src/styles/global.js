import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap');
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto Slab', serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #121212;
}


  button{
    cursor: pointer;
  }
`;
