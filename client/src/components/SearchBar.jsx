/*========== EXTERNAL MODULES ==========*/
import React, { useState } from 'react';
import styled from 'styled-components';

/*========== INTERNAL MODULES ==========*/
import Input from './Input.jsx';

/*========== EXPORTS ==========*/

/** SearchBar constructor that takes:
 *
 * @param {*} children - any additional buttons that should be added to the SearchBar
 * @param {function} searchState - searchState={local set state function}
 * @prop {*} props - any property or tag that needs to be passed to the component
 * @returns {Component} configured SearchBar component
 */
export default function SearchBar({
  children,
  searchState,
   ...props
  }) {

    /*----- STATE HOOKS -----*/
    const [searchTerm, setSearchTerm] = useState();

  /*----- LIFECYCLE METHODS -----*/

  /*----- EVENT HANDLERS -----*/
  const handleSubmit = event => {
    event.preventDefault();
    searchState(searchTerm);
  }

  const handleChange = ({ target:{value} }) => setSearchTerm(value);

  /*----- RENDER METHODS -----*/

  /*----- RENDERER -----*/
  return (
    <Bar role='search'>
      <Input
        name={'search'}
        onChange={handleChange}
        {...props}
      />
      {children}
      <button onClick={handleSubmit}>Go</button>
    </Bar>
  )
}




/*========== STYLES ==========*/
const Bar = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 80vw;
  min-width: 150px;
  max-width: 1000px
`;