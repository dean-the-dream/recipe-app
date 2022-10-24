import { Row, Card, Col, CardTitle, CardText, Container, Button} from "reactstrap"
import { Link } from "react-router-dom"


const LogoutPage = () => {
  return (
    <Container color="dark" className = "mt-5">
      <Row>
  <Col sm="12">
    <Card body>
      <CardTitle tag="h5">
        You are not logged in.
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
     <Link to="/login"><Button>
        Login Again?
      </Button></Link> 
    </Card>
  </Col>
</Row>  
    </Container>
    
  )

}

export default LogoutPage