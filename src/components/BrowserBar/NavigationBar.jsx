import {Navbar, NavbarBrand, Nav} from "reactstrap"
import { Link} from "react-router-dom"
import './BrowserBar.scss'
import logo from '../../img/pngegg.png'
import {LoginButton} from "../../components"

const NavigationBar = ({logInOrOut, loggedIn}) => {
  return (
  <Navbar className="" color="dark" dark >
    <NavbarBrand href="/home">
      <img alt="logo" style={{height: 40, width: 40}}
        src={logo}/>
      Recipe App
    </NavbarBrand>
    <Nav fill pills>
<ul>
  <li><Link to='/about'>About</Link></li>
  <li><Link className="nav-link" onClick={() => window.location.href ="https://github.com/dean-the-dream"}>GitHub</Link></li>
  {/* <li> {!loggedIn ? <LoginButton path="/login" onClick={()=> {logInOrOut()}}/>:<LogoutButton onClick={()=> {logInOrOut()}} />}</li> */}
  <li> <LoginButton type="nav" path="./login"/></li>
</ul>
    </Nav>
  </Navbar>
  )
}

export default NavigationBar