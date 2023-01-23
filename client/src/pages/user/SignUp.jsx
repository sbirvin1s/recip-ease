/*========== EXTERNAL MODULES ==========*/
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


/*========== INTERNAL MODULES ==========*/
import { useAuth } from '../../contexts/AuthContext';
import { Form, Row } from '../../../dist/stylesheets';
import Alert from '../../components/Alert.jsx';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';

/*========== EXPORTS ==========*/
export default function SignUp() {

  /*----- STATE HOOKS -----*/
  const [email, setEmail]  = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const { signUp, currentUser, logIn } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  /*----- LIFECYCLE METHODS -----*/
  /*----- EVENT HANDLERS -----*/
  const handleEmailEntry = ({ target: { value } }) => setEmail(value);
  const handlePasswordEntry = ({ target: { value } }) => setPassword(value);
  const handlePasswordConfirmationEntry = ({ target: { value } }) => setPasswordConfirmation(value);


  const handleSignUp = async () => {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      return setError('Passwords do not match')
    }

    try{
      setError('');
      setLoading(true);
      await signUp(email, password);

    } catch (err){
      console.error('Sign Up Error: ', err);
      setError('Failed to Sign Up');
    }

    setLoading(false);
    navigate('/WeightSelector');
  }

  /*----- RENDER METHODS -----*/
  /*----- RENDERER -----*/
  return (
    <>
      <Row>
        <h1>Sign Up</h1>
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
        <Input name={'confirmPassword'} labelName={'Confirm Password'} onChange={handlePasswordConfirmationEntry} required type='password'/>
        <Button onClick={handleSignUp} disabled={loading}>Submit</Button>
        <Row>Already have an account? <Link to={'/LogIn'}>Log In</Link></Row>
      </Form>
    </>
  )
}


/*========== STYLES ==========*/