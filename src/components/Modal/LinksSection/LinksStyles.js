import styled from 'styled-components';

export const LinksStyles = styled.div`
   margin-top: 2rem;
   display: flex;
   align-items: center;
   gap: 2.5rem;
   font-weight: 300;
   h2 {
      text-align: left;
      width: auto;
      margin: 0;
   }

   .link {
      font-size: 2rem;
      color: inherit;
      text-decoration: none;
      background-color: rgba(var(--grey));
      padding: 0rem 0.5rem;
      height: 3rem;
      border-radius: 6px;
      display: flex;
      align-items: center;

      &:hover {
         color: rgba(var(--dark-2));
      }

      @media screen {
         @media (max-width: 850px) {
            font-size: 1.7rem;
         }
         @media (max-width: 850px) {
            font-size: 1.5rem;
         }
         @media (max-width: 640px) {
            font-size: 1.2rem;
         }
      }
   }
   @media screen {
      @media (max-width: 850px) {
         gap: 1rem 1.5rem;
      }
      @media (max-width: 640px) {
         flex-wrap: wrap;
      }
   }
`;
