import { Button } from "reactstrap"
import { Link } from "react-router-dom"

const LogoutButton = ({type, path, logout}) => {
    return ( 
    <Link to="/loggedout"><Button color="primary" onClick={()=>logout(false)}>Logout</Button></Link>
    ) 
  }

export default LogoutButton