import React from 'react';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

const Loading = ({ loading, size }) => (
   <LoadingStyle>
      <ClipLoader color={'rgba(var(--blue))'} loading={loading} size={size ? size : 15} />
   </LoadingStyle>
);

const LoadingStyle = styled.div`
   margin: 1rem auto;
   display: flex;
   justify-content: center;
   position: absolute;
   right: 1rem;
`;

export default Loading;
