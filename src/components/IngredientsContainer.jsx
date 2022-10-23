import { Container, Row, Col } from "reactstrap"

const IngredientsContainer = (ingredients) => {
    const ingredientsList=ingredients.ingredients
    // console.log(ingredientsList)
  return (
    <Container>
        <Row className="d-flex flex-column">
            <Col className="text-center">
            <h2>Ingredients</h2>
            </Col>
            <Col>
            {ingredientsList.map(ingredient => {
                return <p
                key={ingredient.foodId}>
                    {ingredient.text}
                    </p>
            })}
            </Col>
        </Row>
        

    </Container>
  )
}

export default IngredientsContainer