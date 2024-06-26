import styled from 'styled-components';

export const ContributorsStyles = styled.div`
   font-size: 1.8rem;
   display: flex;
   align-items: center;
   margin-bottom: 1rem;
   p {
      margin: 0;
      font-size: 2rem;
   }

   .contributor-list {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      gap: 1rem;
      margin: 0;
      padding: 0;
   }

   .contributor {
      color: rgba(var(--light));
      text-decoration: none;
      border: 1px solid rgba(var(--grey), 0.4);
      background-color: rgba(var(--light), 0.1);
      padding: 3px 6px;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      .image {
         border-radius: 50%;
         border: 1px solid rgba(var(--grey-2), 1);
      }

      p {
         margin: 0;
         &::before {
            content: '@';
         }
      }

      &:hover {
         color: rgba(var(--blue));
         border: 1px solid rgba(var(--blue));
         .image {
            border: 1px solid rgba(var(--blue));
         }
      }
   }
`;
