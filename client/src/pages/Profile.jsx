/*========== EXTERNAL MODULES ==========*/
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

/*========== INTERNAL MODULES ==========*/
import { Page, Column, Row } from '../../dist/stylesheets';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/Button.jsx';
import Alert from '../components/Alert.jsx';
import Input from '../components/Input.jsx';

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
  const { logOut, currentUser } = useAuth();
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
  /*----- RENDER METHODS -----*/


  /*----- RENDERER -----*/
  return (
    <>
      <Page>
        <h1>Welcome {currentUser.email}</h1>
        <Column>
          Placeholders:
          <Input name={'weight'} labelName={'Weight'}></Input>
          <Input name={'fitnessLevel'} labelName={'Fitness Level'}></Input>
          <Input name={'weightGoal'} labelName={'Weight Loss Goal'}></Input>
          <h4>Total Daily Caloric Goal</h4>
        </Column>
        <Column>
          Modifiers:
          <Input name={'modifyWeight'} labelName={'Weight'}></Input>
          <Input name={'modifyFitnessLevel'} labelName={'Fitness Level'}></Input>
          <Input name={'modifyWeightGoal'} labelName={'Weight Loss Goal'}></Input>
        </Column>
        <Row>
          <Button variant='link' onClick={handleLogOut}>Log Out</Button>
        </Row>
        {error && <Alert variant='fail'>{error}</Alert>}
      </Page>
    </>
  )
}


/*========== STYLES ==========*/