import styled from 'styled-components';

export const LinksStyles = styled.div`
   margin-top: 5rem;
   display: flex;
   gap: 2.5rem;
   font-weight: 300;

   .link {
      font-size: 2rem;
      color: inherit;
      text-decoration: none;
      background-color: rgba(var(--grey));
      padding: 0.5rem;
      border-radius: 6px;
      display: flex;
      align-items: center;

      &:hover {
         color: rgba(var(--dark-2));
      }
   }
`;
