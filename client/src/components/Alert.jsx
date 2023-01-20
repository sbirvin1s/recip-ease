/*========== EXTERNAL MODULES ==========*/
import react from 'react';
import React from 'react';
import styled from 'styled-components';

/*========== INTERNAL MODULES ==========*/

/*========== EXPORTS ==========*/

/** Alert constructor that takes:
 *
 * @param {string} variant - ['success', 'warn', 'fail'] if none given, will return default
 * @param {string} message - the message that should be displayed in the alert
 * @prop {*} props - any property or tag that needs to be passed to the component
 * @returns {Component}
 */
export default function Alert({ variant = '', message, ...props}) {

/*----- STATE HOOKS -----*/
/*----- LIFECYCLE METHODS -----*/
/*----- EVENT HANDLERS -----*/
/*----- RENDER METHODS -----*/
  switch(variant) {
    case 'success':
      return <SuccessStyle {...props}>{message}</SuccessStyle>
    case 'warn':
        return <WarnStyle {...props}>{message}</WarnStyle>
    case 'fail':
      return <FailStyle {...props}>{message}</FailStyle>
    default:
      return <DefaultStyle {...props}>{message}</DefaultStyle>
  }
}

Alert.propTypes = {
  variant: React.PropTypes.oneOf(['success', 'warn', 'fail'])
}

/*========== STYLES ==========*/

const SuccessStyle = styled.div`
  margin: 4px;
  font-weight: bold;
  color: #53ff1a;
  background-color: #c6ffb3;
  border: none;
  outline: none;
`;

const WarnStyle = styled.div`
  margin: 4px;
  font-weight: bold;
  color: #b38600;
  background-color: #ffecb3;
  border: none;
  outline: none;
`;

const FailStyle = styled.div`
  margin: 4px;
  font-weight: bold;
  color: #ff4d4d;
  background-color: #ffb3b3;
  border: none;
  outline: none;
`;

const DefaultStyle = styled.div`
  margin: 4px;
  font-weight: bold;
  color: #171816;
  background-color: #ffffcc;
  border: none;
  outline: none;
`;