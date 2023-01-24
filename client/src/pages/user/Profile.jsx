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
  //   fitnessLevel,
  //   weightGoals,
  // } = userInfo;

  const weightInKg = () => userInfo.currentWeight / 2.20462;

  const heightInCm = () => userInfo.height * 2.54;
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

    if (userInfo && userInfo.weightGoals) {
      switch(userInfo.weightGoals) {
        case '1':
          calorieModification = -1000;
          break;
        case '2':
          calorieModification = -500;
          break;
        case '4':
          calorieModification = 500;
          break;
        case '5':
          calorieModification = 1000;
          break;
        default:
          calorieModification = 0;
          break;
      }
    }


    if (userInfo && userInfo.fitnessLevel) {
      switch(userInfo.fitnessLevel) {
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
      const harrisBenedict = (88.362 + (13.397 * weightInKg()) + (4.799 * heightInCm) - (5.677 * userInfo.ages));

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
        <h1>Welcome {userInfo && userInfo.firstName}</h1>
        <Column>
          Placeholders:
          <Row>{userInfo && userInfo.age}</Row>
          <Row>{userInfo && userInfo.height}</Row>
          <Row>{userInfo && userInfo.currentWeight}</Row>
          <Row>{userInfo && userInfo.fitnessLevel}</Row>
          <Row>{userInfo && userInfo.weightGoals}</Row>
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