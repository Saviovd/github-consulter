import { createGlobalStyle } from 'styled-components';

const light = '230 ,237 ,229';
const dark = '1 ,4 ,9';
const dark2 = '13 ,17 ,23';
const blue = '31 ,111 ,235';
const grey = '141 ,150 ,160'


export const GlobalStyle = createGlobalStyle`
   :root {
      --light: ${light};
      --dark: ${dark};
      --dark-2: ${dark2};
      --blue: ${blue};
      --grey: ${grey}
   }
   html {
      font-size: 10px;
      margin: 0;
      padding: 0;
   }
`;
