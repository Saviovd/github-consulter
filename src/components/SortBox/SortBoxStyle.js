import styled from 'styled-components';

export const SortBoxStyle = styled.label`
   border-radius: 0.6rem;
   border: 1px solid rgba(var(--grey-2));
   background-color: rgba(var(--dark), .5);
   display: flex;
   align-items: center;
   font-size: 1.4rem;
   padding: 0 0.2rem;
   color: rgba(var(--grey));

   .select {
      background-color: transparent;
      border: 0;
      color: rgba(var(--grey-2));
      width: 5rem;
      cursor: pointer;

      option {
         border-radius: 0.6rem;
         color: rgba(var(--light));
         background-color: rgba(var(--grey-2, 0));
         border: 0;
         &:hover {
            background-color: rgba(var(--grey));
         }
      }
      &:focus {
         outline: none;
         caret-color: var(--grey);
      }
   }
`;
