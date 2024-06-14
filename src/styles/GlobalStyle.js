import { createGlobalStyle, styled } from 'styled-components';

const light = '230 ,237 ,229';
const dark = '1 ,4 ,9';
const dark2 = '13 ,17 ,23';
const blue = '31 ,111 ,235';
const grey = '141 ,150 ,160';
const grey2 = '48 ,54 ,61';


export const GlobalStyle = createGlobalStyle`
   :root {
      --light: ${light};
      --dark: ${dark};
      --dark-2: ${dark2};
      --blue: ${blue};
      --grey: ${grey};
      --grey-2: ${grey2};
   }
   html {
      font-size: 10px;
      margin: 0;
      padding: 0;
      body {
         background-color: rgba(var(--dark));
         color: rgba(var(--light));
         height: calc(100vh - 3rem);
         display: flex;
         justify-content: center;
         align-items: center;
         overflow: hidden;
      }
   }

`;

export const HomeStyle = styled.main`
   background-color: rgba(var(--dark-2));
   height: 90vh;
   width: 90%;
   border-radius: 0.6rem;
   border: 1px solid rgba(var(--grey-2));

   .top-bar {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgba(var(--grey-2));
      border-radius: 0.6rem 0.6rem 0 0;
      background-color: rgba(var(--grey), 0.1);
      padding: 3rem;
   }
`
