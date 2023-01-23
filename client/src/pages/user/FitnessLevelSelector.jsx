/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import { useNavigate } from 'react-router-dom';


/*========== INTERNAL MODULES ==========*/
import { useUserInfo } from '../../contexts/UserContext';
import { Form, Row, Label } from '../../../dist/stylesheets';
import Button from '../../components/Button.jsx';

/*========== EXPORTS ==========*/
export default function FitnessLevelSelector() {

  /*----- STATE HOOKS -----*/
  const { updateUserInfo } = useUserInfo();
  const navigate = useNavigate();

  /*----- LIFECYCLE METHODS -----*/
  /*----- EVENT HANDLERS -----*/
  const handleNext = () => {
    event.preventDefault();
    navigate('/WeightGoals');
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
        <h1>How Active Are You?</h1>
      </Row>
      <Form
        style={{
          height: '25vh',
          width: '100vw',
        }}
        >
        <Label htmlFor='fitnessLevel'>
              Select Your Current Level of Activity:
                <select
                  id='fitnessLevel'
                  name='fitnessLevel'
                  onChange={updateUserInfo}
                >
                  <option value={'Bedridden'}>Bedridden</option>
                  <option value={'Sedentary'}>Sedentary</option>
                  <option value={'Lightly Active'}>Lightly Active</option>
                  <option value={'Moderately Active'}>Moderately Active</option>
                  <option value={'Very Active'}>Very Active</option>
                  <option value={'Extremely Active'}>Extremely Active</option>
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