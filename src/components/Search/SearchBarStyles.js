import styled from 'styled-components';

export const SearchBarStyles = styled.form`
   background-color: rgba(var(--dark), .5);
   border: 1px solid rgba(var(--grey-2));
   padding: 0.2rem;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 0.8rem;
   border-radius: 0.6rem;
   height: 3rem;
   width: 30rem;
   .octicon {
      fill: rgba(var(--grey));
      border-left: 1px solid rgba(var(--grey));
      padding-left: 0.5rem;
      cursor: pointer;
   }
   .input-text {
      background-color: transparent;
      border: 0;
      color: rgba(var(--grey));
      width: 100%;

      &:focus {
         outline: none;
         caret-color: var(--grey);
      }
   }

   @media screen {
      @media (max-width: 530px) {
         width: 20rem;
      }
   }
`;
