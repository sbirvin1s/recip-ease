/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import ReactDOM from 'react-dom';

/*========== INTERNAL MODULES ==========*/
import { ModalBG } from '../../dist/stylesheets';

/*========== EXPORTS ==========*/
export default function Modal({ showForm, setShowForm, children, ...props }) {

  if (!showForm) return null;

/*----- STATE HOOKS -----*/

/*----- LIFECYCLE METHODS -----*/

/*----- EVENT HANDLERS -----*/

/*----- RENDER METHODS -----*/

/*----- RENDERER -----*/
  return ReactDOM.createPortal(
    <ModalBG onClick={() => setShowForm(false)}>
      <form onClick={event => event.stopPropagation()} {...props}>
        {children}
      </form>
    </ModalBG>,
    document.getElementById('portal')
  )
}


/*========== STYLES ==========*/
