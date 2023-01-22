/*========== EXTERNAL MODULES ==========*/
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


/*========== INTERNAL MODULES ==========*/
import { useAuth } from '../contexts/AuthContext';
import { Form, Row } from '../../dist/stylesheets';
import Alert from '../components/Alert.jsx';
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';

/*========== EXPORTS ==========*/
export default function LogIn() {

  /*----- STATE HOOKS -----*/
  const [email, setEmail]  = useState();
  const [password, setPassword] = useState();
  const { logIn } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  /*----- LIFECYCLE METHODS -----*/
  /*----- EVENT HANDLERS -----*/
  const handleEmailEntry = ({ target: { value } }) => setEmail(value);
  const handlePasswordEntry = ({ target: { value } }) => setPassword(value);

  const handleLogIn = async () => {
    event.preventDefault();

    try{
      setError('');
      setLoading(true);
      await logIn(email, password);

    } catch (err){
      console.error('Log In Error: ', err);
      setError('Failed to Log In');
    }

    setLoading(false);
    return navigate('/');
  }

  /*----- RENDER METHODS -----*/
  /*----- RENDERER -----*/
  return (
    <>
      <Row>
        <h1>Log In</h1>
      </Row>
      <Form
        style={{
          height: '25vh',
          width: '100vw',
        }}
      >
        {error && <Alert variant='fail'>{error}</Alert>}
        <Input name={'email'} labelName={'Email'} onChange={handleEmailEntry} required type='email'/>
        <Input name={'password'} labelName={'Password'} onChange={handlePasswordEntry} required type='password'/>
        <Button  onClick={handleLogIn} disabled={loading}>Submit</Button>
        <Row>Dont' have and account? <Link to={'/SignUp'}>Sign Up</Link></Row>
      </Form>
    </>
  )
}


/*========== STYLES ==========*/