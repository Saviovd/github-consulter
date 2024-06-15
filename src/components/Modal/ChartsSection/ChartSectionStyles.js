import styled from 'styled-components';

export const ChartStyles = styled.div`
   display: flex;
   justify-content: flex-start;
   gap: 2rem;

   .chart-container {
      background-color: rgba(var(--grey-2), 0.1);
      border: 1px solid rgba(var(--grey), 0.1);
      padding: 1rem;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 320px;
      height: 220px;
      @media screen {
         @media (max-width: 885px) {
            min-width: 50%;
         }
         @media (max-width: 885px) {
            min-width: 40%;
         }
      }
   }

   @media screen {
      @media (max-width: 690px) {
         flex-direction: column;
         justify-content: center;
         align-self: center;
      }
   }
`;
