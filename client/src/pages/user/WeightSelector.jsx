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
          value={(userInfo && userInfo.height) || ''}
          required
        />
        <Input
          name={'current_weight'}
          labelName={'Current Weight (in pounds)'}
          onChange={updateUserInfo}
          type='number'
          value={(userInfo && userInfo.current_weight) || ''}
          required
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