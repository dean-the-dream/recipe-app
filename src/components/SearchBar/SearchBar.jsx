import React from 'react'
import {Input, Button, Container, Row, Col} from 'reactstrap'

const SearchBar = () => {
  return (
    <Container>
      <Row>
          <Col>
              <Input
                id="exampleSearch"
                name="search"
                placeholder="Search"
                type="search"
              />
          </Col>
          <Col>
          <Button className='col-2'>
            Search
          </Button>
          </Col>
          <Col>
          <Input 
              id="exampleSelect"
              name="select"
              type="select"
              defaultValue={"Meal Type"}
            >
              <option disabled>
                Meal Type
              </option>
              <option>
                2
              </option>
              <option>
                3
              </option>
              <option>
                4
              </option>
              <option>
                5
              </option>
            </Input>
          </Col>

  
  </Row>
    </Container>
  )
}

export default SearchBar