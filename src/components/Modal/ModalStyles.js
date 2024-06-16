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
      min-height: 72.5rem;

      .charts {
         display: flex;
         flex-wrap: wrap;
         align-items: flex-start;
         justify-content: flex-start;
         gap: 2rem;

         @media screen {
            @media (max-width: 1100px) {
               flex-direction: column;
               gap: 1rem;
            }
         }
      }
      @media screen {
         @media (max-width: 600px) {
            overflow-y: auto;
            overflow-x: hidden;
            min-height: 62rem;
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
   max-width: 80rem;
   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
   position: relative;
   min-height: 55rem;
   max-height: 55rem;
   .close-button {
      background: none;
      border: none;
      position: absolute;
      top: 10px;
      right: 0.5rem;
      cursor: pointer;
      svg {
         fill: rgba(var(--blue));
      }
      @media screen {
         @media (max-width: 430px) {
            right: 0rem;
            top: 0.5rem;
         }
      }
   }

   .message {
      font-size: 1.5rem;
      color: #8d0e26;
      margin: 1rem 0;
      width: 100%;
   }

   @media screen {
      @media (max-width: 800px) {
         overflow-y: scroll;
      }
      @media (max-width: 600px) {
         min-height: 500px;
      }
   }
`;
