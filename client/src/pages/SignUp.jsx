/*========== EXTERNAL MODULES ==========*/
import React, { useRef, useState } from 'react';


/*========== INTERNAL MODULES ==========*/
import { useAuth } from '../contexts/AuthContext';
import { Form } from '../../dist/stylesheets';
import Alert from '../components/Alert.jsx';
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';

/*========== EXPORTS ==========*/
export default function SignUp() {

  /*----- STATE HOOKS -----*/
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  /*----- LIFECYCLE METHODS -----*/
  /*----- EVENT HANDLERS -----*/
  const handleSubmit = async () => {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError('Passwords do not match')
    }

    try{
      setError('');
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);

    }
    catch {
      setError('Failed to Sign Up');
    }

    setLoading(false);
  }

  /*----- RENDER METHODS -----*/
  /*----- RENDERER -----*/
  return (
    <>
      <h1>Sign Up</h1>
      <Form>
        {error && <Alert variant={'fail'}>{error}</Alert>}
        <Input name={'Email'} labelName={'email'}/>
        <Input name={'Password'} labelName={'password'}/>
        <Input name={'Confirm Password'} labelName={'confirmPassword'}/>
        <Button onClick={handleSubmit} disabled={loading}>Submit</Button>
      </Form>
    </>
  )
}


/*========== STYLES ==========*/