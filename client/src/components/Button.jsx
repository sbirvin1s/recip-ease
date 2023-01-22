/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import styled from 'styled-components';

/*========== INTERNAL MODULES ==========*/

/*========== EXPORTS ==========*/

/** Button constructor that takes:
 *
 * @param {string} variant - ['', ...] if none given, will return default
 * @param {*} children - anything that should be placed inside the component
 * @prop {*} props - any property or tag that needs to be passed to the component
 * @returns {Component}
 */
export default function Button({ variant, children, ...props}) {

/*----- STATE HOOKS -----*/
/*----- LIFECYCLE METHODS -----*/
/*----- EVENT HANDLERS -----*/
/*----- RENDER METHODS -----*/

/*----- RENDERER -----*/
switch(variant) {
  case 'success':
    return <SuccessAlert {...props}>{children}</SuccessAlert>
  case 'warn':
      return <WarnAlert {...props}>{children}</WarnAlert>
  case 'link':
    return <LinkButton {...props}>{children}</LinkButton>
  default:
    return <DefaultButton {...props}>{children}</DefaultButton>
}
}


/*========== STYLES ==========*/

const DefaultButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin: 4px;
  padding: 10px;
  background-color: #7de3c5;
  border-radius: 6px;
  border: none;
  outline: none;
`;

const LinkButton = styled(DefaultButton)`
  text-decoration: underline;
  cursor: pointer;
  background-color: transparent;
  color: #7de3c5;
`;