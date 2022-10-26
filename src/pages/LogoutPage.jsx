import { Row, Card, Col, CardTitle, CardText, Container, Button} from "reactstrap"
import { useNavigate } from "react-router-dom"


const LogoutPage = () => {
  const navigate = useNavigate();
  return (
    <Container color="dark" className = "vh-100 mt-5 d-flex align-items-center">
    <Card className="d-flex align-items-center w-100" >
      <CardTitle tag="h5">
        You are not logged in.
      </CardTitle>
      <CardText>
        Please login to veiw this content.
      </CardText>
     <Button onClick={() => {navigate("/login")}}>Login</Button>
    </Card>
    </Container>
    
  )

}

export default LogoutPage