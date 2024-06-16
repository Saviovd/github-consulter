import styled from 'styled-components';

export const SearchBarStyles = styled.div`
   background-color: rgba(var(--dark), 0.5);
   border: 1px solid rgba(var(--grey-2));
   padding: 0.2rem;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 0.8rem;
   border-radius: 0.6rem;
   height: 4rem;
   width: 35rem;
   .octicon {
      fill: rgba(var(--grey));
      border-left: 1px solid rgba(var(--grey));
      padding-left: 0.8rem;
      margin-right: 0.8rem;
      height: 60%;
      cursor: pointer;
   }
   .input-text {
      font-size: 1.7rem;
      background-color: transparent;
      border: 0;
      color: rgba(var(--grey));
      width: 100%;

      &:focus {
         outline: none;
         caret-color: var(--grey);
      }

      @media (max-width: 420px) {
         font-size: 1.5rem;
      }
   }

   @media screen {
      @media (max-width: 610px) {
         width: 30rem;
      }
      @media (max-width: 610px) {
         width: 25rem;
      }
      @media (max-width: 420px) {
         width: 20rem;
      }
      @media (max-width: 370px) {
         width: 18rem;
      }
   }
`;
