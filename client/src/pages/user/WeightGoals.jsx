/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import { useNavigate } from 'react-router-dom';


/*========== INTERNAL MODULES ==========*/
import { useUserInfo } from '../../contexts/UserContext';
import { Form, Row, Label } from '../../../dist/stylesheets';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';

/*========== EXPORTS ==========*/
export default function WeightGoals() {

  /*----- STATE HOOKS -----*/
  const { userInfo, updateUserInfo } = useUserInfo();
  const navigate = useNavigate();

  /*----- LIFECYCLE METHODS -----*/
  /*----- EVENT HANDLERS -----*/
  const handleNext = event => {
    event.preventDefault();
    navigate('/Review');
  }

  const handleBack = event => {
    event.preventDefault();
    navigate('/FitnessLevelSelector');
  }

  /*----- RENDER METHODS -----*/
  /*----- RENDERER -----*/
  return (
    <>
      <Row>
        <h1>What Are Your Weekly Body Composition Goals?</h1>
      </Row>
      <Form
        style={{
          height: '50vh',
          width: '100vw',
        }}
        >
        <Label htmlFor='weight_goals'>
            Change Per Week:
              <select
                id='weight_goals'
                name='weight_goals'
                onChange={updateUserInfo}
                value={(userInfo && userInfo.weight_goals) || ''}
              >
                <option value={null}>--</option>
                <option value={'Lose 2 pounds a week'}>Lose 2 pounds a week</option>
                <option value={'Lose 1 pound a week'}>Lose 1 pound a week</option>
                <option value={'Maintain my current weight'}>Maintain my current weight</option>
                <option value={'Gain 1 pound a week'}>Gain 1 pound a week</option>
                <option value={'Gain 2 pounds a week'}>Gain 2 pounds a week</option>
              </select>
          </Label>
        <Row>
          <Button variant='link' onClick={handleBack} >Back</Button>
          <Button onClick={handleNext} >Next</Button>
        </Row>
      </Form>
    </>
  )
}


/*========== STYLES ==========*/