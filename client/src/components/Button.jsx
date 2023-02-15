/*========== EXTERNAL MODULES ==========*/
import React, { useState } from 'react';
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
export default function Button({ variant, handleClick, children, ...props }) {

/*----- STATE HOOKS -----*/
cccccc

/*----- LIFECYCLE METHODS -----*/
/*----- EVENT HANDLERS -----*/
const handleSelected = event => {
  event.preventDefault();
  handleClick(event);
  setSelected(selected => !selected);
}
/*----- RENDER METHODS -----*/

/*----- RENDERER -----*/
  switch(variant) {
    case 'success':
      return <SuccessAlert {...props}>{children}</SuccessAlert>
    case 'link':
      return <LinkButton {...props}>{children}</LinkButton>
    case 'card':
      return <CardButton selected={selected} onClick={handleSelected} {...props}>{children}</CardButton>
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

const CardButton = styled.button`
  margin: 0.5rem;
  width: 100px;
  height: 100px;
  background: linear-gradient(90deg, rgba(197, 196, 196, 0.47) 0%, rgba(166, 165, 165, 0.47) 100.96%);
  box-shadow: 6px 6px 12px rgba(156, 156, 156, 0.6);
  border-radius: 15px;
  border: none;
  outline: none;
  transition: all .2s ease-in-out;
  transform: scale(${({selected}) => selected ? 1.25 : 1});

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  /* &:active:after {
    transform: scale(1.25);
  } */
`;