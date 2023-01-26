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
  const { userInfo, updateUserInfo } = useUserInfo();
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
          height: '50vh',
          width: '100vw',
        }}
        >
          <Label htmlFor='fitness_level'>
            Select Your Current Level of Activity:
              <select
                id='fitness_level'
                name='fitness_level'
                onChange={updateUserInfo}
                value={(userInfo && userInfo.fitness_level) || ''}
              >
                <option value={null}>--</option>
                <option value={'Bedridden'}>Bedridden</option>
                <option value={'Sedentary'}>Sedentary</option>
                <option value={'Lightly Active'}>Lightly Active</option>
                <option value={'Moderately Active'}>Moderately Active</option>
                <option value={'Very Active'}>Very Active</option>
                <option value={'Extremely Active'}>Extremely Active</option>
              </select>
          </Label>
          {/* <Button
            variant='card'
            onClick={updateUserInfo}
            id='fitnessLevel'
            name='fitnessLevel'
            value='Bedridden'
          >
            Bedridden
          </Button>
          <Button
            variant='card'
            onClick={updateUserInfo}
            id='fitnessLevel'
            name='fitnessLevel'
            value='Sedentary'
          >
            Sedentary
          </Button>
          <Button
            variant='card'
            onClick={updateUserInfo}
            id='fitnessLevel'
            name='fitnessLevel'
            value='Lightly Active'
          >
            Lightly Active
          </Button>
          <Button
            variant='card'
            onClick={updateUserInfo}
            id='fitnessLevel'
            name='fitnessLevel'
            value='Moderately Active'
          >
            Moderately Active
          </Button>
          <Button
            variant='card'
            onClick={updateUserInfo}
            id='fitnessLevel'
            name='fitnessLevel'
            value='Very Active'
          >
            Very Active
          </Button>
          <Button
            variant='card'
            onClick={updateUserInfo}
            id='fitnessLevel'
            name='fitnessLevel'
            value='Extremely Active'
          >
            Extremely Active
          </Button> */}
        <Row>
          <Button variant='link' onClick={handleBack} >Back</Button>
          <Button onClick={handleNext} >Next</Button>
        </Row>
      </Form>
    </>
  )
}


/*========== STYLES ==========*/