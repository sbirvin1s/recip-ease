/*========== EXTERNAL MODULES ==========*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

/*========== INTERNAL MODULES ==========*/
import { Page, Column, Row, Label } from '../../../dist/stylesheets';
import { useAuth } from '../../contexts/AuthContext';
import { useUserInfo } from '../../contexts/UserContext';
import Button from '../../components/Button.jsx';
import Alert from '../../components/Alert.jsx';

/** TODO: #31 User Profile - Client Implementation
  - [ ] Create User Profile Interface that allows:
    - [ ] Making a new profile
    - [ ] Adding Weight
    - [ ] Adding Fitness Level
    - [ ] Adding weight loss goals
    - [ ] Reporting shows total caloric daily goals
*/

/*========== EXPORTS ==========*/
export default function Profile() {

  /*----- STATE HOOKS -----*/
  const { logOut } = useAuth();
  const { userInfo } = useUserInfo();
  const [error, setError] = useState();
  const navigate = useNavigate();

  /*----- LIFECYCLE METHODS -----*/
  /*----- EVENT HANDLERS -----*/

    const handleLogOut = async () => {
      setError('');

      try {
        await logOut();
        navigate('/LogIn');
      } catch {
        setError('Failed to Log Out')
      }
    }

  const handleUpdate = () => {
    return navigate('/WeightSelector');
  }
  /*----- RENDER METHODS -----*/


  /*----- RENDERER -----*/
  return (
    <>
      <Page>
        <h1>Welcome {userInfo.name}</h1>
        <Column>
          Placeholders:
          <Row>{userInfo && userInfo.currentWeight}</Row>
          <Row>{userInfo && userInfo.fitnessLevel}</Row>
          <Row>{userInfo && userInfo.weightGoals}</Row>
          <h4>Total Daily Caloric Goal</h4>
        </Column>
        <Row>
          <Button onClick={handleUpdate}>Update Goals</Button>
        </Row>
        <Row>
          <Button variant='link' onClick={handleLogOut}>Log Out</Button>
        </Row>
        {error && <Alert variant='fail'>{error}</Alert>}
      </Page>
    </>
  )
}


/*========== STYLES ==========*/