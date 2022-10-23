import {IngredientsContainer, PhotoContainer, NutrientsContainer} from '../components'
import { Button } from 'bootstrap'
import { Container, Card, CardBody, Row, Col } from 'reactstrap'
import { useLocation } from 'react-router-dom'

const RecipePage = () => {
  
  const location = useLocation();
  // console.log(location.state.recipeData.totalNutrients)
  return (
    <>
    
    <h2>Place Holder Title</h2>
    <Card>
      <CardBody>
        <Container>
          <Row >
            <Col xs='12' md="4">
             <IngredientsContainer ingredients={location.state.recipeData.ingredients}/>
            </Col>
            <Col xs='12' md="4">
            <PhotoContainer pic={location.state.recipeData.image}/>
            </Col>
            <Col xs='12' md="4">
            <NutrientsContainer nutrients={location.state.recipeData.totalNutrients}/>
            </Col>
          </Row>
        </Container>
        
      </CardBody>
    </Card>
    </>
  )
    
    
}

export default RecipePage