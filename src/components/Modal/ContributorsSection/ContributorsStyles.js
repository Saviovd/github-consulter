import styled from 'styled-components';

export const ContributorsStyles = styled.div`
   font-size: 1.8rem;
   margin: 3rem auto 0;
   p {
      margin: 1rem 0;
   }
   .contributor-list {
      display: flex;
      list-style-type: none;
      gap: 2rem;
      margin: 0;
      li {
      }
   }

   .contributor {
      color: rgba(var(--light));
      text-decoration: none;
      background-color: rgba(var(--light), .5);
      padding: 3px 6px;
      border-radius: 6px;

      &::before {
         content: '@';
      }
      &:hover {
         color: rgba(var(--blue));
      }
   }
`;
