/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import styled from 'styled-components';

/*========== INTERNAL MODULES ==========*/

/*========== EXPORTS ==========*/

/** Input constructor that takes:
 *
 * @param {string} name - the string value to be passed as the id and name of the component
 * @param {string} labelName - text to be displayed as a label
 * @param {*} children - anything that should be contained inside the input tag
 * @prop {*} props - any property that needs to be passed to the input tag
 * @returns {Component}
 */
export default function Input({
  name,
  labelName,
  children,
   ...props
}) {

  /*----- RENDERER -----*/
  return (
    <label
      htmlFor={name}
    >
      {labelName}
      <InputStyle
        id={name}
        name={name}
        {...props}
      >
        {children}
      </InputStyle>
    </label>
  )
}




/*========== STYLES ==========*/
const InputStyle = styled.input`
  border: solid;
  border-width: thin;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  /* font-size: 12pt; */
  font-weight: light;
  background-color: transparent;
  padding: 2px;
  margin: 10px;
  text-align: center;
`;