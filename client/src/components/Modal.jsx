/*========== EXTERNAL MODULES ==========*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/*========== INTERNAL MODULES ==========*/
import { ModalBG } from '../../dist/stylesheets';

/*========== EXPORTS ==========*/

/** Modal component that takes:
 *
 * @param {boolean} showModal - state boolean that controls if the Modal is shown
 * @param {function} setShowModal - modifies showModal to either true or false
 * @param {*} children - anything that is contained inside the ListItem component
 * @prop {*} props - any property or tag that needs to be passed to the component
 * @returns {Component} configured ListItem component
 */
export default function Modal({ showModal, setShowModal, children, ...props }) {

  if (!showModal) return null;

/*----- STATE HOOKS -----*/

/*----- LIFECYCLE METHODS -----*/

/*----- EVENT HANDLERS -----*/

/*----- RENDER METHODS -----*/

/*----- RENDERER -----*/
  return ReactDOM.createPortal(
    <ModalBG onClick={() => setShowModal(false)}>
      <form onClick={event => event.stopPropagation()} {...props}>
        {children}
      </form>
    </ModalBG>,
    document.getElementById('portal')
  )
}


/*========== STYLES ==========*/
