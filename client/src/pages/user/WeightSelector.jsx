/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import { useNavigate } from 'react-router-dom';


/*========== INTERNAL MODULES ==========*/
import { useUserInfo } from '../../contexts/UserContext';
import { Form, Row } from '../../../dist/stylesheets';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';

/*========== EXPORTS ==========*/
export default function WeightSelector() {

  /*----- STATE HOOKS -----*/
  const { updateUserInfo } = useUserInfo();
  const navigate = useNavigate();

  /*----- LIFECYCLE METHODS -----*/
  /*----- EVENT HANDLERS -----*/
  const handleNext = () => {
    event.preventDefault();
    navigate('/FitnessLevelSelector');
  }

  const handleBack = () => {
    event.preventDefault();
    navigate('/WeightSelector');
  }

  /*----- RENDER METHODS -----*/
  /*----- RENDERER -----*/
  return (
    <>
      <Row>
        <h1>How Much Do You Weigh?</h1>
      </Row>
      <Row>
        <h5>in pounds</h5>
      </Row>
      <Form
        style={{
          height: '25vh',
          width: '100vw',
        }}
        >
        <Input name={'name'} labelName={'Name'} onChange={updateUserInfo} required />
        <Input name={'currentWeight'} labelName={'Current Weight'} onChange={updateUserInfo} required type='number'/>
        <Row>
          <Button variant='link' onClick={handleBack} >Back</Button>
          <Button onClick={handleNext} >Next</Button>
        </Row>
      </Form>
    </>
  )
}


/*========== STYLES ==========*/