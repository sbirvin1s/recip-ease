/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import ReactDOM from 'react-dom';

/*========== INTERNAL MODULES ==========*/
import { ModalBG } from '../../dist/stylesheets';

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
      <form onClick={event => event.stopPropagation()} {...props}>
        <button role='close modal' onClick={() => {setShowModal(false)}}>X</button>
        {children}
      </form>
    </ModalBG>,
    document.getElementById('portal')
  )
}


/*========== STYLES ==========*/
