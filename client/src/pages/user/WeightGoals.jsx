/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import { useNavigate } from 'react-router-dom';


/*========== INTERNAL MODULES ==========*/
import { useUserInfo } from '../../contexts/UserContext';
import { Form, Row } from '../../../dist/stylesheets';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';

/*========== EXPORTS ==========*/
export default function WeightGoals() {

  /*----- STATE HOOKS -----*/
  const { updateUserInfo } = useUserInfo();
  const navigate = useNavigate();

  /*----- LIFECYCLE METHODS -----*/
  /*----- EVENT HANDLERS -----*/
  const handleNext = () => {
    event.preventDefault();
    navigate('/Profile');
  }

  const handleBack = () => {
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
          height: '25vh',
          width: '100vw',
        }}
        >
        <Input
          name={'weightGoals'}
          labelName={'Change Per Week'}
          onChange={updateUserInfo} required type='range'
          min='0'
          max='6'
          value='3'
          step='1'
        />
        <Row>
          <Button variant='link' onClick={handleBack} >Back</Button>
          <Button onClick={handleNext} >Complete</Button>
        </Row>
      </Form>
    </>
  )
}


/*========== STYLES ==========*/