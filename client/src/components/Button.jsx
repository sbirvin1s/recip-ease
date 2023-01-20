/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import styled from 'styled-components';

/*========== INTERNAL MODULES ==========*/

/*========== EXPORTS ==========*/

/** Button constructor that takes:
 *
 * @param {*} children - any component that should be rendered on the modal
 * @prop {*} props - any property or tag that needs to be passed to the component
 * @returns {Component}
 */
export default function Button({ children, ...props}) {

/*----- STATE HOOKS -----*/
/*----- LIFECYCLE METHODS -----*/
/*----- EVENT HANDLERS -----*/
/*----- RENDER METHODS -----*/

/*----- RENDERER -----*/
  return <ButtonStyle {...props}>{children}</ButtonStyle>
}


/*========== STYLES ==========*/

const ButtonStyle = styled.button`
  margin: 4px;
  background-color: transparent;
  border: none;
  outline: none;
`;