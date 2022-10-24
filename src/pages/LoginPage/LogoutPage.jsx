import { Row, Card, Col, CardTitle, CardText, Container, Button} from "reactstrap"


const LogoutPage = () => {
  return (
    <Container color="dark">
      <Row>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
        You are not logged in.
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button>
        Login Again?
      </Button>
    </Card>
  </Col>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button>
        Go somewhere
      </Button>
    </Card>
  </Col>
</Row>  
    </Container>
    
  )

}

export default LogoutPage