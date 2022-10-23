import { Card, CardBody, CardText, CardSubtitle, CardTitle, Button, Col } from "reactstrap"
import { useNavigate, useLocation } from "react-router-dom";


const Recipe = ({recipeData}) => {
  // console.log(recipeData, "data")
  const{label, image, dishType, cuisineType} = recipeData;
  const navigate = useNavigate()
  const location = useLocation
  // console.log(image)

  return (
    <Col xs="12" sm="6" md="3" >
    <Card
  style={{
    width: '18rem'
  }}
  color="dark"
>
  <img
    alt={`A picture of ${label}`}
    src={image}
    
  />
  <CardBody>
    <CardTitle tag="h5">
      {label}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {`${dishType} - ${cuisineType}`}
    </CardSubtitle>
    {/* <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText> */}
    <Button 
    onClick={() => navigate("/recipie", {state:{recipeData}})}
  >
      Details
    </Button>
  </CardBody>
</Card>
    </Col>

  )
}

export default Recipe