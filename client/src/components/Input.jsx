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
    <LabelStyle
      htmlFor={name}
    >
      <InputTitle>
        {labelName}
      </InputTitle>
      <InputStyle
        id={name}
        name={name}
        {...props}
      >
        {children}
      </InputStyle>
    </LabelStyle>
  )
}




/*========== STYLES ==========*/
const LabelStyle = styled.label`
  position: relative;
  border: solid;
  border-width: thin;
  outline: none;
  background-color: transparent;
  border-radius: 5px;
  margin: 12px;
`;

const InputTitle = styled.div`
  position: absolute;
  top: -0.5rem;
  left: 0.5rem;
  font-weight: light;
  padding-left: 4px;
  padding-right: 4px;
  background-color: #fff;
  text-align: center;
  border-radius: 5px;
  font-size: 0.9rem;
`;

const InputStyle = styled.input`
  border: none;
  outline: none;
  font-weight: light;
  background-color: transparent;
  padding: 5px;
  text-align: center;
`;