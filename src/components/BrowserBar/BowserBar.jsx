import {Navbar, NavbarBrand, Nav, Button} from "reactstrap"
import { Link, useNavigate} from "react-router-dom"
import './BrowserBar.scss'
import logo from '../../img/pngegg.png'

const BrowserBar = () => {
  const navigate = useNavigate();
  return (
  <Navbar className="me-2" color="dark" dark>
    <Link to="/">
    <NavbarBrand >
      <img alt="logo" style={{height: 40, width: 40}}
        src={logo}/>
      Recipe App
    </NavbarBrand>
    </Link>
    <Nav fill pills>
<ul>
  <li><Link to='/about'>About</Link></li>
  <li><Link className="nav-link" onClick={() => window.location.href ="https://github.com/dean-the-dream"}>GitHub</Link></li>
  <li><Button color="primary" href="/login">Login</Button></li>
</ul>
    </Nav>
  </Navbar>
  )
}

export default BrowserBar