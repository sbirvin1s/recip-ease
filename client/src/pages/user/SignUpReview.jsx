/*========== EXTERNAL MODULES ==========*/
import React, {useEffect} from 'react';
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
  const { userInfo, updateSpecificInfo } = useUserInfo();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const weightInKg = () => userInfo.current_weight / 2.20462;
  const heightInCm = () => userInfo.height * 2.54;

  /*----- LIFECYCLE METHODS -----*/
  useEffect(() => {
    let calorieModification;
    let activityModifier;

    if (userInfo && userInfo.weight_goals) {
      switch(userInfo.weight_goals) {
        case 'Lose 2 pounds a week':
          calorieModification = -1000;
          break;

        case 'Lose 1 pound a week':
          calorieModification = -500;
          break;

        case 'Gain 1 pound a week':
          calorieModification = 500;
          break;

        case 'Gain 2 pounds a week':
          calorieModification = 1000;
          break;

        default:
          calorieModification = 0;
          break;
      }
    }

    if (userInfo && userInfo.fitness_level) {
      switch(userInfo.fitness_level) {
        case 'Sedentary':
          activityModifier = 1.2;  // sedentary - no exercise
          break;

        case 'Lightly Active':
          activityModifier = 1.375;  // lightly exercise 1 - 3 times a week
          break;

        case 'Moderately Active':
          activityModifier = 1.55;  // exercise 3 - 5 times a week
          break;

        case 'Very Active':
          activityModifier = 1.725;  // exercise 6 - 7 times a week
          break;

        case 'Extremely Active':
          activityModifier = 1.9;  // exercise 7 times a week and also have a physically demanding job
          break;

        default:
          activityModifier = 1;  // bedridden
          break;
      }
    }

    if(userInfo && userInfo.sex === 'Male') {
      const mifflinStJeor = ((10 * weightInKg()) + (6.25 * heightInCm()) - (5 * userInfo.age + 5));
      const harrisBenedict = (88.362 + (13.397 * weightInKg()) + (4.799 * heightInCm) - (5.677 * userInfo.age));

      const averageBMR = (mifflinStJeor + harrisBenedict) / 2;
      updateSpecificInfo('calorie_goal', Math.floor((averageBMR * activityModifier) + calorieModification));
    }

    if(userInfo && userInfo.sex === 'Female') {
      const mifflinStJeor =  ((10 * weightInKg()) + (6.25 * heightInCm()) - (5 * userInfo.age) - 161);
      const harrisBenedict = (447.593 + (9.247 * weightInKg()) + (3.098 * heightInCm()) - (4.330 * userInfo.age));

      const averageBMR = (mifflinStJeor + harrisBenedict) / 2;
      updateSpecificInfo('calorie_goal', Math.floor((averageBMR * activityModifier) + calorieModification));
    }
  } , [])

  /*----- EVENT HANDLERS -----*/
  const handleSubmit = event => {
    event.preventDefault();
    axios.post(`/user/create/${currentUser.uid}`, {
      body: userInfo
    })
    .then(submitResponse => console.log(submitResponse.data))
    .catch(err => console.error(`Unable to submit due to error: ${err}`))
    navigate('/Profile');
  }

  const handleUpdate = event => {
    event.preventDefault();
    axios.put(`/user/update/${currentUser.uid}`, {
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


  /*----- RENDER METHODS -----*/
  /*----- RENDERER -----*/
  return (
    <Page>
      <Row>
        <h1>One final check. Does this Information look correct?</h1>
      </Row>
      <Column>
        <P><strong>Name: </strong>{userInfo.first_name + ' ' + userInfo.last_name}</P>
        <P><strong>Age: </strong>{userInfo.age}</P>
        <P><strong>Biological Sex: </strong>{userInfo.sex}</P>
        <P><strong>Height: </strong>{userInfo.height}</P>
        <P><strong>Current Weight: </strong>{userInfo.current_weight}</P>
        <P><strong>Current Fitness Level: </strong>{userInfo.fitness_level}</P>
        <P><strong>Daily Caloric Goal: </strong>{userInfo.calorie_goal}</P>
        <P><strong>Weekly Fitness Goal: </strong>{userInfo.weight_goals}</P>
      </Column>
      <Row>
        <Button variant='link' onClick={handleBack} >Back</Button>
        <Button onClick={handleSubmit} >Complete</Button>
      </Row>
        <Button onClick={handleUpdate} >Update</Button>
    </Page>
  )
}


/*========== STYLES ==========*/