import { Button } from "reactstrap"
const LoginButton = ({type, path}) => {
  return ( 
  <Button color="primary" href={path}
                    // onClick={changeLogin}
                    >Login</Button>
  ) 
}

export default LoginButton