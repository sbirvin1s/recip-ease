/*========== EXTERNAL MODULES ==========*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

/*========== INTERNAL MODULES ==========*/
import { P, Page, Column, Row, Label } from '../../../dist/stylesheets';
import { useAuth } from '../../contexts/AuthContext';
import { useUserInfo } from '../../contexts/UserContext';
import Button from '../../components/Button.jsx';
import Alert from '../../components/Alert.jsx';

/*========== EXPORTS ==========*/
export default function Profile() {

  /*----- STATE HOOKS -----*/
  const { logOut } = useAuth();
  const { userInfo } = useUserInfo();
  const [error, setError] = useState();
  const navigate = useNavigate();

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
  /*----- RENDERER -----*/
  return (
    <>
      <Page>
        <h1>Welcome {userInfo && userInfo.first_name}</h1>
        <Column>
        <P><strong>Name: </strong>{userInfo && userInfo.first_name + ' ' + userInfo.last_name}</P>
        <P><strong>Age: </strong>{userInfo && userInfo.age}</P>
        <P><strong>Biological Sex: </strong>{userInfo && userInfo.sex}</P>
        <P><strong>Height: </strong>{userInfo && userInfo.height}</P>
        <P><strong>Current Weight: </strong>{userInfo && userInfo.current_weight}</P>
        <P><strong>Current Fitness Level: </strong>{userInfo && userInfo.fitness_level}</P>
        <P><strong>Daily Caloric Goal: </strong>{userInfo && userInfo.calorie_goal}</P>
        <P><strong>Weekly Fitness Goal: </strong>{userInfo && userInfo.weight_goals}</P>
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