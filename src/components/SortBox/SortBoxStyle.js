import styled from 'styled-components';

export const SortBoxStyle = styled.label`
   border-radius: 0.6rem;
   border: 1px solid rgba(var(--grey-2));
   background-color: rgba(var(--dark), 0.5);
   display: flex;
   align-items: center;
   font-size: 1.8rem;
   padding: 0 0.2rem;
   color: rgba(var(--grey));
   padding: 0.8rem;

   .select {
      background-color: transparent;
      border: 0;
      color: rgba(var(--grey-2));
      width: 5rem;
      cursor: pointer;
      font-size: 1.7rem;

      option {
         font-size: 1.5rem;
         border-radius: 0.6rem;
         color: rgba(var(--light));
         background-color: rgba(var(--grey-2, 0.1));
         border: 0;
         &:hover {
            background-color: rgba(var(--grey));
         }
         position: absolute;
         right: 0;
      }
      &:focus {
         outline: none;
         caret-color: var(--grey);
      }
      @media screen {
         @media (max-width: 480px) {
            width: 2rem;
         }
      }
   }

   @media screen {
      @media (max-width: 480px) {
         font-size: 1.5rem;
      }
   }
`;
