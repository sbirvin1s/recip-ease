/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import { useNavigate } from 'react-router-dom';


/*========== INTERNAL MODULES ==========*/
import { useUserInfo } from '../../contexts/UserContext';
import { Form, Row, Column } from '../../../dist/stylesheets';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';

/*========== EXPORTS ==========*/
export default function WeightSelector() {

  /*----- STATE HOOKS -----*/
  const { userInfo, updateUserInfo } = useUserInfo();
  const navigate = useNavigate();

  /*----- LIFECYCLE METHODS -----*/
  /*----- EVENT HANDLERS -----*/
  const handleNext = () => {
    event.preventDefault();
    navigate('/FitnessLevelSelector');
  }

  const handleBack = () => {
    event.preventDefault();
    navigate('/BasicInfo');
  }

  /*----- RENDER METHODS -----*/
  /*----- RENDERER -----*/
  return (
    <>
      <Column>
        <h1>Basic Metrics</h1>
      </Column>
      <Form
        style={{
          height: '25vh',
          width: '100vw',
        }}
        >
        <Input
          name={'height'}
          labelName={'Height (in inches)'}
          onChange={updateUserInfo}
          type='number'
          required
        />
        <Input
          name={'currentWeight'}
          labelName={'Current Weight (in pounds)'}
          onChange={updateUserInfo}
          required
          type='number'
          // value={userInfo.currentWeight || ''}
        />
        <Row>
          <Button variant='link' onClick={handleBack} >Back</Button>
          <Button onClick={handleNext} >Next</Button>
        </Row>
      </Form>
    </>
  )
}


/*========== STYLES ==========*/