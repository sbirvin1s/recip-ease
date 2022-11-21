/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

/*========== INTERNAL MODULES ==========*/
import { ModalBG, Button } from '../../dist/stylesheets';

/*========== EXPORTS ==========*/

/** Modal constructor that takes:
 *
 * @param {boolean} showModal - state boolean that controls if the modal is shown
 * @param {function} setShowModal - modifies showModal to either true or false
 * @param {*} children - any component that should be rendered on the modal
 * @prop {*} props - any property or tag that needs to be passed to the component
 * @returns {Component} configured ListItem component
 */
export default function Modal({
  showModal,
  setShowModal,
  children,
  ...props
}) {

  if (!showModal) return null;

/*----- RENDERER -----*/
  return ReactDOM.createPortal(
    <ModalBG onClick={() => setShowModal(false)}>
      <Button
        role='close modal'
        onClick={() => {setShowModal(false)}}
        style={{
          alignSelf: 'end',
          marginRight: '5.5vw',
        }}
      >
        X
      </Button>
      <ModalForm
        onClick={event => event.stopPropagation()}
        {...props}
      >
        {children}
      </ModalForm>
    </ModalBG>,
    document.getElementById('portal')
  )
}


/*========== STYLES ==========*/
const ModalForm = styled.form`
  background-color: #fff;
  height: 90vh;
  width: 90vw;
  overflow: scroll;
`;