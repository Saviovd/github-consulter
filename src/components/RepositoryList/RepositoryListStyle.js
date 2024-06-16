import styled from 'styled-components';

export const RepositoryListStyle = styled.ul`
   padding: 0 3rem;
   list-style-type: none;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   overflow-y: auto;
   height: 80%;
   max-height: 60vh;
   min-height: 380px;

   &::-webkit-scrollbar {
      width: 4px;
      height: 10px;
   }

   &::-webkit-scrollbar-button:end:increment {
      display: none;
   }
   &::-webkit-scrollbar-button:start:decrement {
      display: none;
   }

   &::-webkit-scrollbar-thumb:vertical {
      background-color: #666;
      -webkit-border-radius: 6px;
   }

   @media screen {
      @media (max-width: 600px) {
         min-height: 370px;
      }
      @media (max-width: 710px) {
         padding: 0 2rem;
      }
   }
`;

export const Title = styled.h2`
   margin-left: 3rem;
   font-size: 2rem;
   font-weight: normal;
   span {
      color: rgba(var(--blue), 0.8);
      font-size: 3rem;
      margin-left: 1rem;
   }
`;

export const Repository = styled.div`
   border-radius: 0.6rem;
   padding: 1rem 1rem 0rem;
   border: 1px solid rgba(var(--grey-2));
   background-color: rgba(var(--grey-2), 0.1);
   cursor: pointer;

   .repository-name {
      font-size: 2.5rem;
      margin: 0;
   }
   .repository-description {
      font-size: 1.5rem;
      background-color: rgba(var(--grey-2), 0.3);
      padding: 1rem;
      border-radius: 0.6rem;
   }
   .owner {
      font-size: 1.2rem;
      margin: 0;
      display: flex;
      align-items: center;
      font-style: italic;

      .link {
         font-weight: 600;
         font-size: 2rem;
         color: rgba(var(--blue), 1);
         margin-left: 0.5rem;
         font-style: normal;
         text-decoration: none;
      }
   }
`;
