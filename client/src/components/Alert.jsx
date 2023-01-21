/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import styled from 'styled-components';

/*========== INTERNAL MODULES ==========*/

/*========== EXPORTS ==========*/

/** Alert constructor that takes:
 *
 * @param {string} variant - ['success', 'warn', 'fail'] if none given, will return default
 * @param {string} children - the message that should be displayed in the alert
 * @prop {*} props - any property or tag that needs to be passed to the component
 * @returns {Component}
 */
export default function Alert({ variant = '', children, ...props}) {

/*----- STATE HOOKS -----*/
/*----- LIFECYCLE METHODS -----*/
/*----- EVENT HANDLERS -----*/
/*----- RENDER METHODS -----*/
  switch(variant) {
    case 'success':
      return <SuccessAlert {...props}>{children}</SuccessAlert>
    case 'warn':
        return <WarnAlert {...props}>{children}</WarnAlert>
    case 'fail':
      return <FailAlert {...props}>{children}</FailAlert>
    default:
      return <DefaultAlert {...props}>{children}</DefaultAlert>
  }
}

// Alert.propTypes = {
//   variant: React.PropTypes.oneOf(['success', 'warn', 'fail'])
// }

/*========== STYLES ==========*/

const DefaultAlert = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 4px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  font-weight: bold;
  color: #171816;
  background-color: #ffffcc;
  border: none;
  outline: none;
  z-index: 2;
`;

const SuccessAlert = styled(DefaultAlert)`
  color: #53ff1a;
  background-color: #c6ffb3;
`;

const WarnAlert = styled(DefaultAlert)`
  color: #b38600;
  background-color: #ffecb3;
`;

const FailAlert = styled(DefaultAlert)`
  color: #ff4d4d;
  background-color: #ffb3b3;
`;

