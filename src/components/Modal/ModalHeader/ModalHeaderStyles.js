import styled from 'styled-components';

export const ModalHeaderStyles = styled.div`
margin-bottom: 2rem;
   .project-name {
      margin: 0;
      font-size: 4rem;
      color: rgba(var(--blue));
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

   .dates {
      display: flex;
      gap: 3rem;
   }
   .project-created {
      font-size: 1.5rem;
      margin: 0;
      margin: 3px 0;

      span {
         color: rgba(var(--grey));
         background-color: rgba(var(--grey-2), 0.3);
         padding: 0.5rem;
         border-radius: 6px;
         text-decoration: underline;
      }
   }
`;
