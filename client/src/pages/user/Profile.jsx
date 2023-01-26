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

  // const {
  //   age,
  //   height,
  //   currentWeight,
  //   sex,
  //   firstName,
  //   lastName,
  //   fitness_level,
  //   weightGoals,
  // } = userInfo;

  const weightInKg = () => userInfo.current_weight / 2.20462;
  const heightInCm = () => userInfo.height * 2.54;
  let weeklyFitnessGoals = '';

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
    return navigate('/BasicInfo');
  }
  /*----- RENDER METHODS -----*/
  const renderCaloricGoal = () => {

    let calorieModification;
    let activityModifier;

    if (userInfo && userInfo.weight_goals) {
      switch(userInfo.weight_goals) {
        case '-2':
          calorieModification = -1000;
          weeklyFitnessGoals = 'Lose 2 pounds a week';

          break;
        case '-1':
          calorieModification = -500;
          weeklyFitnessGoals = 'Lose 1 pound a week';
          break;
        case '+1':
          calorieModification = 500;
          weeklyFitnessGoals = 'Gain 1 pound a week';
          break;
        case '+2':
          calorieModification = 1000;
          weeklyFitnessGoals = 'Gain 2 pounds a week';

          break;
        default:
          calorieModification = 0;
          weeklyFitnessGoals = 'Maintain my current weight';
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
          activityModifier = 1;
          break;
      }
    }


    if(userInfo && userInfo.sex === 'male') {
      const mifflinStJeor = ((10 * weightInKg()) + (6.25 * heightInCm()) - (5 * userInfo.age + 5));
      const harrisBenedict = (88.362 + (13.397 * weightInKg()) + (4.799 * heightInCm) - (5.677 * userInfo.age));

      const averageBMR = (mifflinStJeor + harrisBenedict) / 2;
      return (averageBMR * activityModifier) + calorieModification;
    }

    if(userInfo && userInfo.sex === 'female') {
      const mifflinStJeor =  ((10 * weightInKg()) + (6.25 * heightInCm()) - (5 * userInfo.age) - 161);
      const harrisBenedict = (447.593 + (9.247 * weightInKg()) + (3.098 * heightInCm()) - (4.330 * userInfo.age));

      const averageBMR = (mifflinStJeor + harrisBenedict) / 2;
      return (averageBMR * activityModifier) + calorieModification;
    }
  }


  /*----- RENDERER -----*/
  return (
    <>
      <Page>
        <h1>Welcome {userInfo && userInfo.first_name}</h1>
        <Column>
          Placeholders:
          <Row>{userInfo && userInfo.age}</Row>
          <Row>{userInfo && userInfo.height}</Row>
          <Row>{userInfo && userInfo.current_weight}</Row>
          <Row>{userInfo && userInfo.fitness_level}</Row>
          <Row>{userInfo && weeklyFitnessGoals}</Row>
          <Row>
            <h4>Total Daily Caloric Goal</h4>
            {renderCaloricGoal()}
          </Row>
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