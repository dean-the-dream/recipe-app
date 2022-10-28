import './LoginSection.scss'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import logo from '../../assets/pngegg.png'
import { LoggedInContext } from '../../contexts/LoggedInContext'

const LoginSection = ({setLogin, loggedIn}) => {
  const navigate = useNavigate();
  const context = useContext(LoggedInContext);
  const clickLogIn = () => {
    navigate("/")
    context.toggleLoggedIn();


  }
  // console.log(loggedIn, "function")


  return (
    <div className='login-section'>

      <h1>Recipe App</h1>
      <img src={logo} alt="" />
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
  <Button onClick={() => clickLogIn()}>Login</Button>
</Form>
    </div>
  )
}

export default LoginSection