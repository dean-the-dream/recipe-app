import {Navbar, NavbarBrand, Nav, Button} from "reactstrap"
import { Link, useNavigate} from "react-router-dom"
import './BrowserBar.scss'
import logo from '../../assets/pngegg.png'
import { LoggedInContext } from "../../contexts/LoggedInContext";
import { useContext } from "react"

const NavigationBar = () => {
  const navigate = useNavigate()
  const context = useContext(LoggedInContext)
  console.log(context.isLoggedIn)
  
  return (
  <Navbar  color="dark" dark>

    <NavbarBrand onClick={() => navigate("/")} className="pointer">
      <img alt="logo" style={{height: 50, width: 50}}
        src={logo} />
      Recipe App
    </NavbarBrand>
   

    <Nav fill pills>
<ul>
  <li><Link to='/about'>About</Link></li>
  <li><a className="nav-link" href ="https://github.com/dean-the-dream" target="_blank" rel="noreferrer">GitHub</a></li>
  <li> 
   {!context.isLoggedIn && <Button onClick={() => navigate("/login")}>Login</Button>}
  </li>
</ul>
    </Nav>
  </Navbar>
  )
}

export default NavigationBar