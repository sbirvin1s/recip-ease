/*========== EXTERNAL MODULES ==========*/
import React, { useState } from 'react';


/*========== INTERNAL MODULES ==========*/
import { useAuth } from '../contexts/AuthContext';
import { Form, Row } from '../../dist/stylesheets';
import Alert from '../components/Alert.jsx';
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';

/*========== EXPORTS ==========*/
export default function SignUp() {

  /*----- STATE HOOKS -----*/
  const [email, setEmail]  = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const { signUp } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  /*----- LIFECYCLE METHODS -----*/
  /*----- EVENT HANDLERS -----*/
  const handleEmailEntry = ({ target: { value } }) => setEmail(value);
  const handlePasswordEntry = ({ target: { value } }) => setPassword(value);
  const handlePasswordConfirmationEntry = ({ target: { value } }) => setPasswordConfirmation(value);


  const handleSubmit = async () => {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      return setError('Passwords do not match')
    }

    try{
      setError('');
      setLoading(true);
      await signUp(email, password);

    } catch {
      setError('Failed to Sign Up');
    }

    setLoading(false);
  }

  /*----- RENDER METHODS -----*/
  const renderError = () => {
    if (error) {
      console.log(error);
      return <Alert variant={'fail'}>{error}</Alert>
    } else {
      return <></>
    }
  }

  /*----- RENDERER -----*/
  return (
    <>
      <h1>Sign Up</h1>
      <Form>
        {renderError()}
        <Input name={'Email'} labelName={'email'} onChange={handleEmailEntry} required/>
        <Input name={'Password'} labelName={'password'} onChange={handlePasswordEntry} required/>
        <Input name={'Confirm Password'} labelName={'confirmPassword'} onChange={handlePasswordConfirmationEntry} required/>
        <Button onClick={handleSubmit} disabled={loading}>Submit</Button>
        <Row>Already have an account? </Row>
      </Form>
    </>
  )
}


/*========== STYLES ==========*/