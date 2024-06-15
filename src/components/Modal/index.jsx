'use client'
import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../store/actions/modalActions';
import styled from 'styled-components';

const Modal = ({ isOpen, repoDetails, closeModal }) => {

   if (!isOpen || !repoDetails) return null;

   return (
      <ModalOverlay>
         <ModalContent>
            <button className='close-button' onClick={closeModal}>
               Close
            </button>
            <h2>{repoDetails.name}</h2>
            <p>Repository Details:</p>
         </ModalContent>
      </ModalOverlay>
   );
};

const mapStateToProps = (state) => {
   return {
      isOpen: state.modal.isOpen,
      repoDetails: state.modal.repoDetails,
   };
};

export default connect(mapStateToProps, { closeModal })(Modal);

const ModalOverlay = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: rgba(0, 0, 0, 0.7);
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 1000;
`;

const ModalContent = styled.div`
   background: white;
   padding: 20px;
   border-radius: 5px;
   width: 500px;
   max-width: 80%;
   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
   position: relative;
   .close-button {
      background: none;
      border: none;
      font-size: 16px;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
   }
`;
