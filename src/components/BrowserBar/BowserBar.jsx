import {Navbar, NavbarBrand, Nav, Button} from "reactstrap"
import { Link } from "react-router-dom"
import './BrowserBar.scss'
import logo from '../../img/pngegg.png'

const BrowserBar = () => {
  return (
  <Navbar className="me-2" color="dark" dark>
    <NavbarBrand href="/">
      <img alt="logo" style={{height: 40, width: 40}}
        src={logo}/>
      <Link to="/">Recipe App</Link>
    </NavbarBrand>
    <Nav fill pills>
<ul>
  <li><Link to='/about'>About</Link></li>
  <li><a className="nav-link" href="https://github.com/dean-the-dream" target="_blank" rel="noreferrer">GitHub</a></li>
  <li><Button color="primary" href="/login">Login</Button></li>
</ul>
    </Nav>
  </Navbar>
  )
}

export default BrowserBar