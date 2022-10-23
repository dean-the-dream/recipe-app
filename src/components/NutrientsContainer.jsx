import { Container, Row, Col } from "reactstrap"

const NutrientsContainer = (nutrients) => {
    const nutrientsList=Object.entries(nutrients.nutrients)
    console.log(nutrientsList)
  return (
    <Container>
        <Row className="d-flex flex-column">
            <Col className="text-center">
            <h2>Nutrients</h2>
            </Col>
            <Col>
            {nutrientsList.map(nutrient => {
                return <p
                key={nutrient[0]}>
                    {`${nutrient[1].label}: ${Math.round(nutrient[1].quantity)}${nutrient[1].unit}`}
                    </p>
            })
            .filter((item, index) => index < 7 )}
            </Col>
        </Row>
    </Container>
  )
}
export default NutrientsContainer