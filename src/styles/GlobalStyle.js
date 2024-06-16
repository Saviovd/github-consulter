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
      box-sizing: border-box;
      body {
         background-color: rgba(var(--dark));
         color: rgba(var(--light));
         height: calc(100vh - 3rem);
         display: flex;
         justify-content: center;
         align-items: center;
         overflow: hidden;
         @media screen {
         @media (max-width: 600px) {
            overflow: auto;
            min-height: 620px;
         }
      }
      }
   }

`;

export const HomeStyle = styled.main`
   background-color: rgba(var(--dark-2));
   height: 90vh;
   width: 90%;
   border-radius: 0.6rem;
   border: 1px solid rgba(var(--grey-2));
   position: relative;
   min-height: 675px;

   .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(var(--grey-2));
      border-radius: 0.6rem 0.6rem 0 0;
      background-color: rgba(var(--grey), 0.1);
      padding: 3rem;
      @media screen {
         @media (max-width: 600px) {
            padding: 1.5rem 1rem;
            height: 5rem;
         }
      }
   }

   .null-list {
      color: rgba(var(--light), .5);
      width: 100%;
      margin: 1rem auto;
      text-align: center;
   }
   @media screen {
      @media (max-width: 600px) {
         min-height: 580px;
      }
      @media (max-width: 430px) {
         width: 95%;
         height: 92vh;
      }
   }
`;
export const Assign = styled.div`
   position: absolute;
   right: 2rem;
   bottom: 1rem;
   background-color: rgba(var(--grey), 0.1);
   border-radius: 6px;

   p {
      margin: 0;
      font-size: 2rem;
      padding: 0.5rem;

      .portfolio {
         color: rgb(var(--blue));
         text-decoration: none;
      }
   }

   @media screen {
      @media (max-width: 430px) {
         width: 30rem;
         text-align: center;
         right: calc(50% - 15rem);
      }
   }
`;
