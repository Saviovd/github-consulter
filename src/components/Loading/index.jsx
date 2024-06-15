import React from 'react';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

const Loading = ({ loading }) => (
   <LoadingStyle>
      <ClipLoader color={'rgba(var(--blue))'} loading={loading} size={15} />
   </LoadingStyle>
);

const LoadingStyle = styled.div`
   margin: 1rem auto;
   display: flex;
   justify-content: center;
`;

export default Loading;
