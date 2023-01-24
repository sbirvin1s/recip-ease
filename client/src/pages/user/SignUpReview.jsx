/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


/*========== INTERNAL MODULES ==========*/
import { useUserInfo } from '../../contexts/UserContext';
import { useAuth } from '../../contexts/AuthContext';
import { Form, Row, Label, Page, Column, P } from '../../../dist/stylesheets';
import Button from '../../components/Button.jsx';

/*========== EXPORTS ==========*/
export default function SignUpReview() {

  /*----- STATE HOOKS -----*/
  const { userInfo, updateUserInfo } = useUserInfo();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  let weeklyFitnessGoals = '';

  /*----- LIFECYCLE METHODS -----*/
  /*----- EVENT HANDLERS -----*/
  const handleSubmit = event => {
    event.preventDefault();
    axios.put(`/user/update/${currentUser.uuid}`, {
      body: userInfo
    })
    .then(submitResponse => console.log(submitResponse.data))
    .catch(err => console.error(`Unable to submit due to error: ${err}`))
    navigate('/Profile');
  }

  const handleBack = event => {
    event.preventDefault();
    navigate('/FitnessLevelSelector');
  }

  switch(userInfo.WeightGoals) {
    case '-2':
      weeklyFitnessGoals = 'Lose 2 pounds a week';
      break;
    case '-1':
      weeklyFitnessGoals = 'Lose 1 pound a week';
      break;
    case '+1':
      weeklyFitnessGoals = 'Gain 1 pound a week';
      break;
    case '+2':
      weeklyFitnessGoals = 'Gain 2 pounds a week';
      break;
    default:
      weeklyFitnessGoals = 'Maintain my current weight';
      break;
  }

  /*----- RENDER METHODS -----*/
  /*----- RENDERER -----*/
  return (
    <Page>
      <Row>
        <h1>One final check. Does this Information look correct?</h1>
      </Row>
      <Column>
        <P><strong>Name: </strong>{userInfo.firstName + ' ' + userInfo.lastName}</P>
        <P><strong>Age: </strong>{userInfo.age}</P>
        <P><strong>Biological Sex: </strong>{userInfo.sex}</P>
        <P><strong>Height: </strong>{userInfo.height}</P>
        <P><strong>Current Weight: </strong>{userInfo.currentWeight}</P>
        <P><strong>Current Fitness Level: </strong>{userInfo.fitnessLevel}</P>
        <P><strong>Weekly Fitness Goal: </strong>{weeklyFitnessGoals}</P>
      </Column>
      <Row>
        <Button variant='link' onClick={handleBack} >Back</Button>
        <Button onClick={handleSubmit} >Complete</Button>
      </Row>
    </Page>
  )
}


/*========== STYLES ==========*/