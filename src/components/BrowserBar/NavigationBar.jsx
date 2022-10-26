import {Navbar, NavbarBrand, Nav} from "reactstrap"
import { Link, useNavigate} from "react-router-dom"
import './BrowserBar.scss'
import logo from '../../img/pngegg.png'
import {LoginButton, LogoutButton} from "../../components"

const NavigationBar = ({logInOrOut, loggedIn}) => {
  const navigate = useNavigate()

  return (
  <Navbar className="" color="dark" dark >

    <NavbarBrand onClick={() => navigate("/")}>
      <img alt="logo" style={{height: 40, width: 40}}
        src={logo}/>
      Recipe App
    </NavbarBrand>
   

    <Nav fill pills>
<ul>
  <li><Link to='/about'>About</Link></li>
  <li><a className="nav-link" href ="https://github.com/dean-the-dream" target="_blank">GitHub</a></li>
  <li> 
   {loggedIn ? <LogoutButton logout={logInOrOut}/>:<LoginButton type="nav" path="/login"/> }
  </li>
</ul>
    </Nav>
  </Navbar>
  )
}

export default NavigationBar