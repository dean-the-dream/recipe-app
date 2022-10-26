import { Row, Card, Col, CardTitle, CardText, Container, Button} from "reactstrap"
import { Link } from "react-router-dom"


const LoggedOutMessage = () => {
  return (
    <Container color="dark" className="d-flex align-content-center h-100">
      <Row> 
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
        You Must Be Logged In To See This Content
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Link to="/login"><Button>
        Click Here To Login
      </Button></Link>
    </Card>
  </Col>
</Row>  
    </Container>
    
  )

}

export default LoggedOutMessage