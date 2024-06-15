import styled from "styled-components";

export const ChartStyles = styled.div`
display: flex;
justify-content: flex-start;
gap: 2rem;

div {
   background-color: rgba(var(--grey-2), .1);
   border: 1px solid rgba(var(--grey), .1);
   padding: 1rem;
   border-radius: 6px;
   max-width: 25rem;
   height: 250px;
   display: flex;
   align-items: center;
   justify-content: center;

   @media screen {
      @media (max-width: 850px) {
         width: 50%;
      }
   }
}
`;
