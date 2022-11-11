/*========== EXTERNAL MODULES ==========*/
import React, { useRef } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

/*========== INTERNAL MODULES ==========*/
import { Input } from '../../dist/stylesheets';
import Button from './Button.jsx';

/*========== EXPORTS ==========*/

/** ListItem component that takes:
 *
 * @param {string} id - unique identifier for ListItem, recommend using React "key"
 * @param {*} children - anything that is contained inside the ListItem component
 * @param {boolean} enableCheckbox - true to enable checkboxes, Default is false
 * @param {boolean} enableButton - true to enable a button, Default is false
 * @param {string} buttonValue - string defining name of button
 * @param {func} buttonClick - passes a function to ListItem button, Default disabled
 * @props any property that should be passed to the component
 * @returns {Component} configured ListItem component
 */
export default function ListItem({
  id,
  children,
  enableCheckbox = false,
  enableButton = false,
  buttonValue,
  buttonClick = false,
  ...props
}) {
  const listRef = useRef();
/*----- STATE HOOKS -----*/

/*----- LIFECYCLE METHODS -----*/

/*----- EVENT HANDLERS -----*/
  const handleSubmit = event => {
    event.preventDefault();
    // searchState(searchRef.current.value);
  }

  buttonClick = buttonClick || handleSubmit;

/*----- RENDER METHODS -----*/
  const renderCheckbox = () => {
    return enableCheckbox ? <Checkbox
    type='checkbox'
    id={id + 'Checkbox'}
    name={id + 'Checkbox'}
  /> : <></>;
  }

  const renderButton = () => {
    return enableButton ? <Button
    onClick={buttonClick}
  >
    {buttonValue}
  </Button> : <></>;
  }
/*----- RENDERER -----*/
  return (
    <Item>
      {renderCheckbox()}
      <label htmlFor={id}/>
      <div
        style={{
          width:'100%',
        }}
        ref={listRef}
        id={id}
        {...props}
      >
        {children}
      </div>
      {renderButton()}
    </Item>
  )
}




/*========== STYLES ==========*/
const Item = styled.li`
  display: flex;
  list-style-type: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 80vw;
  min-width: 150px;
  max-width: 1000px;
`;

const Checkbox = styled.input`

`;