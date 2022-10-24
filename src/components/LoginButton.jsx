import { Button } from "reactstrap"
import { Link } from "react-router-dom"
const LoginButton = ({type, path, setLogin}) => {
  return ( 
  path=="/login" ?  <Link to={path}><Button color="primary"
                    // onClick={changeLogin}
                    >Login</Button></Link>
                    :
                    <Link to="/home"><Button color="primary"
                    onClick={()=> setLogin(true)}
                    >Login</Button></Link>
  ) 
              
}

export default LoginButton