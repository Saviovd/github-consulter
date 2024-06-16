import styled from 'styled-components';

export const ProfileStyles = styled.div`
   background-color: rgba(var(--dark), 0.2);
   border: 1px solid rgba(var(--grey-2));
   display: flex;
   gap: 0.5rem;
   min-width: 5rem;
   padding: 0.5rem 1rem;
   border-radius: 0.8em;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   margin-left: 1rem;
   font-style: normal;
   .avatar {
      border-radius: 0.6rem;
      border: 1px solid rgba(var(--grey-2));
   }

   .login {
      text-decoration: none;
      font-size: 2rem;
      margin: 0;
      color: rgba(var(--light));
   }

   &:hover {
      border: 1px solid rgba(var(--blue));
      .avatar {
         border: 1px solid rgba(var(--blue));
      }
      .login {
         color: rgba(var(--blue));
      }
   }
`;
