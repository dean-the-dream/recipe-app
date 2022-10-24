import './LoginSection.scss'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import LoginButton from '../LoginButton'

const LoginSection = ({setLogin, loggedIn}) => {
  const navigate = useNavigate();
  console.log(loggedIn, "function")


   const changeLogin = () => {
    console.log(loggedIn, "function")
    navigate("./home", {state:{loggedIn}})
   }
  return (
    <div className='login-section'>
      <Form>
  <FormGroup>
    <Label
      for="exampleEmail"
      hidden
    >
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="username"
      placeholder="Username"
      type="text"
    />
  </FormGroup>
  {' '}
  <FormGroup>
    <Label
      for="examplePassword"
      hidden
    >
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="Password"
      type="password"
    />
  </FormGroup>
  {' '}
  <LoginButton/>
</Form>
    </div>
  )
}

export default LoginSection