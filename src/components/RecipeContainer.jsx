import { Row, Card, CardBody, Container } from "reactstrap"
import {Recipe} from '../components'
import { useState, useEffect } from "react"

const RecipeContainer = ({recipes}) => {
  let[contentAvailable, setContentAvailable] = useState(false)
  useEffect (() => {
    setContentAvailable(recipes)
  }, [recipes])

  console.log(recipes, "container")
  return (!contentAvailable ? (
    <Container className="vh-100" >
      <CardBody className="d-flex p-2 justify-content-center ">
      <Card color="dark" className="mt-100">
        <h1>Search For Recipies</h1>
      </Card>
      </CardBody>
    
    </Container>

  ) 
   : (<Container className="w-100 mt-5">
      <Row xs="4" className="gy-5" >
        {recipes.map((cardData) => {
        return <Recipe 
        recipeData={cardData.recipe}
        key={cardData.recipe.url}/>})}
      </Row>
    </Container>)
  )}

export default RecipeContainer