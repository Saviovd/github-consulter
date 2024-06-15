import styled from 'styled-components';

export const ModalOverlay = styled.div`
   .modal-motion {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      background: rgba(0, 0, 0, 0.7);
      justify-content: center;
      align-items: center;
      z-index: 1000;
      color: rgb(var(--light));
      min-height: 725px;

      .charts {
         display: flex;
         flex-wrap: wrap;
         align-items: flex-start;
         justify-content: flex-start;
         gap: 3rem;

         @media screen {
            @media (max-width: 1100px) {
               flex-direction: column;
               gap: 1rem;
            }
         }
      }
   }
`;

export const ModalContent = styled.div`
   background: rgba(var(--dark-2));
   border: 1px solid rgba(var(--blue));
   padding: 20px;
   border-radius: 6px;
   width: 80%;
   height: 70%;
   max-width: 80%;
   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
   position: relative;
   min-height: 625px;
   max-height: 700px;
   .close-button {
      color: rgba(var(--blue));
      text-decoration: underline;
      background: none;
      border: none;
      font-size: 16px;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
   }

   @media screen {
      @media (max-width: 768px) {
         overflow: scroll;
      }
      @media (max-width: 600px) {
         min-height: 500px;
      }
   }
`;
