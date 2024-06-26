import styled from 'styled-components';

export const ModalHeaderStyles = styled.div`
   margin-bottom: 2rem;

   .project-name {
      margin: 0;
      font-size: 2.5rem;
      color: rgba(var(--blue));
      text-align: left;

      @media screen {
         @media (max-width: 430px) {
            font-size: 2.3rem;
            white-space: pre-wrap;
            margin-top: 1.5rem;
         }
      }
   }

   .project-description {
      font-size: 1.5rem;
      background-color: rgba(var(--grey-2), 0.3);
      padding: 1rem;
      border-radius: 0.6rem;
   }

   .project-main-language {
      font-size: 1.5rem;
      margin: 0.5rem 0;

      span {
         font-size: 1.7rem;
         color: rgba(var(--blue));
         font-weight: 500;
         margin-left: 1rem;
      }
   }

   .project-license {
      font-size: 1.5rem;
      margin: 0.5rem 0;
   }

   .dates {
      display: flex;
      gap: 3rem;
      align-items: center;
      flex-wrap: wrap;
      @media screen and (max-width: 480px) {
         gap: 1rem;
      }
   }

   .project-created,
   .project-updated {
      font-size: 1.5rem;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 1rem;

      span {
         color: rgba(var(--grey));
         background-color: rgba(var(--grey-2), 0.3);
         padding: 0.5rem;
         border-radius: 6px;
         text-decoration: underline;
      }

      @media screen and (max-width: 540px) {
         gap: 0.5rem;
         justify-content: flex-start;
         align-items: flex-start;
         text-align: left;
      }

      @media screen and (max-width: 540px) {
         gap: 0.5rem;
         justify-content: flex-start;
         align-items: center;
         text-align: left;
      }
   }
`;
