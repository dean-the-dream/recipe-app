import { Row, Card, CardBody, Container } from "reactstrap"
import {Recipe} from '..'
import { useState, useEffect, useRef } from "react"
import './RecipeContainer.scss'

const RecipeContainer = ({recipes}) => {
  let [contentAvailable, setContentAvailable] = useState(false)
  const isMounted = useRef(false);

  useEffect (() => {
    if(isMounted.current){
      setContentAvailable(recipes)
    } else {
      isMounted.current = true
    }
       
  }, [recipes])

  return(

    <>
  {(!contentAvailable) ? 
  
  <Container className="w-100 mt-5 vh-100" >
    <Card color="dark">
      <CardBody>
        <p className="h1">Hungry?</p>
        <p className="h5">Choose a type of meal to see whats on the menu...</p>
        <p className="h5">Or search for your favorite recipe! </p>
      </CardBody>
    </Card>
    
  </Container>
   :

  (<Container className="w-100 mt-5">
      <Row className="gy-5" >
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