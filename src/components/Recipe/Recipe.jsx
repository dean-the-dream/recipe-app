
import { Card, CardBody, CardText, CardSubtitle, CardTitle, Button, Col } from "reactstrap"
import { useNavigate, useLocation } from "react-router-dom";
import './Recipe.scss'


const Recipe = ({recipeData}) => {
  // console.log(recipeData, "data")
  const{label, image, dishType, cuisineType} = recipeData;
  const navigate = useNavigate()
  const location = useLocation
  const truncate = (str, n) => {
      return (str.length > n) ? (str.slice(0, n-1)).trim() + '...' : str;
  }
  // console.log(image)

  return (
    
    <Col>
    <Card
  style={{
    width: '18rem'
  }}
  color="dark"
  className="recipe-card"
>
  <img
    alt={`A picture of ${label}`}
    src={image}
    
  />

  <CardBody >
    <CardTitle tag="h5">
      {truncate(label, 19)}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {truncate(`${dishType} - ${cuisineType}`, 30)}
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