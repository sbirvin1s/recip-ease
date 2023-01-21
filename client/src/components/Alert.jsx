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
      return <SuccessStyle {...props}>{children}</SuccessStyle>
    case 'warn':
        return <WarnStyle {...props}>{children}</WarnStyle>
    case 'fail':
      return <FailStyle {...props}>{children}</FailStyle>
    default:
      return <DefaultStyle {...props}>{children}</DefaultStyle>
  }
}

// Alert.propTypes = {
//   variant: React.PropTypes.oneOf(['success', 'warn', 'fail'])
// }

/*========== STYLES ==========*/

const SuccessStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 4px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  font-weight: bold;
  color: #53ff1a;
  background-color: #c6ffb3;
  border: none;
  outline: none;
`;

const WarnStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 4px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  font-weight: bold;
  color: #b38600;
  background-color: #ffecb3;
  border: none;
  outline: none;
`;

const FailStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 4px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  font-weight: bold;
  color: #ff4d4d;
  background-color: #ffb3b3;
  border: none;
  outline: none;
`;

const DefaultStyle = styled.div`
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
`;