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
export default function Card({ id, value, name, handleClick = () => null, children, ...props }) {

/*----- STATE HOOKS -----*/
const [selected, setSelected] = useState(false);

/*----- LIFECYCLE METHODS -----*/
/*----- EVENT HANDLERS -----*/
const handleSelected = event => {
  event.preventDefault();
  handleClick(event);
  console.log('selected');
  setSelected(selected => !selected);
}
/*----- RENDER METHODS -----*/

/*----- RENDERER -----*/

return (
  <CardStyle
    selected={selected}
    onClick={handleSelected}
    id={id}
    value={value}
    name={name}
    {...props}
  >
    {children}
  </CardStyle>
)
}


/*========== STYLES ==========*/

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  width: 100px;
  height: 100px;
  background: ${selected => selected ? 'green' : 'grey'};
  background: linear-gradient(90deg, rgba(197, 196, 196, 0.47) 0%, rgba(166, 165, 165, 0.47) 100.96%);
  box-shadow: 6px 6px 12px rgba(156, 156, 156, 0.6);
  border-radius: 15px;
  border: none;
  outline: none;
  transition: all .2s ease-in-out;
  transform: scale(${({selected}) => selected ? 1.25 : 1});
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
