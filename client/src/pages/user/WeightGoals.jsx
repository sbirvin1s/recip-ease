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
  const { updateUserInfo } = useUserInfo();
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
        {/* <Input
          name={'weightGoals'}
          labelName={'Change Per Week'}
          onChange={updateUserInfo} required type='range'
          min='0'
          max='6'
          value='3'
          step='1'
        /> */}
        <Label htmlFor='weight_goals'>
            Change Per Week:
              <select
                id='weight_goals'
                name='weight_goals'
                onChange={updateUserInfo}
              >
                <option value={null}>--</option>
                <option value={'-2'}>Lose 2 pounds a week</option>
                <option value={'-1'}>Lose 1 pound a week</option>
                <option value={'0'}>Maintain my current weight</option>
                <option value={'+1'}>Gain 1 pound a week</option>
                <option value={'+2'}>Gain 2 pounds a week</option>
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