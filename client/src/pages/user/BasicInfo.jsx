/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import { useNavigate } from 'react-router-dom';


/*========== INTERNAL MODULES ==========*/
import { useUserInfo } from '../../contexts/UserContext';
import { Form, Row, Label } from '../../../dist/stylesheets';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';
import Card from '../../components/Card.jsx';

/*========== EXPORTS ==========*/
export default function BasicInfo() {

  /*----- STATE HOOKS -----*/
  const { userInfo, updateUserInfo } = useUserInfo();
  const navigate = useNavigate();

  /*----- LIFECYCLE METHODS -----*/
  /*----- EVENT HANDLERS -----*/
  const handleNext = event => {
    event.preventDefault();
    navigate('/WeightSelector');
  }

  const handleBack = event => {
    event.preventDefault();
    navigate('/BasicInfo');
  }

  /*----- RENDER METHODS -----*/
  /*----- RENDERER -----*/
  return (
    <>
      <Row>
        <h1>Lets get some Baseline Information</h1>
      </Row>
      <Form
        style={{
          height: '50vh',
          width: '100vw',
        }}
        >
          <Input
            name={'first_name'}
            labelName={'First Name'}
            onChange={updateUserInfo}
            placeholder='Iman'
            value={(userInfo && userInfo.first_name) || ''}
            required
          />
          <Input
            name={'last_name'}
            labelName={'Last Name'}
            onChange={updateUserInfo}
            placeholder='Example'
            value={(userInfo && userInfo.last_name) || ''}
            required
          />
          <Input
            name={'age'}
            labelName={'Age (in years)'}
            onChange={updateUserInfo}
            placeholder='30'
            type='number'
            value={(userInfo && userInfo.age) || ''}
            required
          />
          <Label htmlFor='sex'>
            Select your biological sex:
              <select
                id='sex'
                name='sex'
                onChange={updateUserInfo}
                value={(userInfo && userInfo.sex) || ''}
              >
                <option value={null}>--</option>
                <option value={'Female'}>Female</option>
                <option value={'Male'}>Male</option>
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