import { Row, Card, CardBody, Container } from "reactstrap"
import {Recipe} from '../components'
import { useState, useEffect } from "react"

const RecipeContainer = ({recipes}) => {
  let[contentAvailable, setContentAvailable] = useState(false)

  useEffect (() => {
    setContentAvailable(recipes)
  }, [recipes])


  return(

    <>
  {  !contentAvailable ? 
  <Container className="w-100 mt-5 vh-100">
    <Card color="dark">
      <CardBody >
        <h1>Recipe</h1>
      </CardBody>
    </Card>
    
  </Container>
   :

  (<Container className="w-100 mt-5">
      <Row xs="4" className="gy-5" >
        {recipes.map((cardData) => {
        return <Recipe 
        recipeData={cardData.recipe}
        key={cardData.recipe.url}/>})}
      </Row>
    </Container>
    )}
 
    </>
  )
   }

export default RecipeContainer