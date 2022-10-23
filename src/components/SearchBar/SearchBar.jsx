import React from 'react'
import {Input, Button, Container, Row, Col} from 'reactstrap'

const SearchBar = ({getData,setQuery, setMeal, recipe}) => {
	let searchQuery = ""
	let mealType=""
	const submitForm = (e) => {	
		searchQuery = document.querySelector(".query").value
		mealType = document.querySelector(".type").value
		setQuery(searchQuery);
		setMeal(mealType)
		getData();
	}
  console.log(setMeal, "meal set")

  return (
    <Container>
      <Row>
          <Col>
              <Input className='query'
                id="exampleSearch"
                name="search"
                placeholder="Search"
                type="search"
              />
          </Col>
          <Col>
          <Button className='col-2'
		  onClick={submitForm}>
            Search
          </Button>
          </Col>
          <Col>
          <Input 
		      className='type'
              id="exampleSelect"
              name="select"
              type="select"
              defaultValue={"Meal Type"}
            >
              <option disabled>
                Meal Type
              </option>
              <option value="breakfast">
                Breakfast
              </option>
              <option value="lunch">
                Lunch
              </option>
              <option  value="snack">
                Dinner
              </option>
              <option  value="snack">
                Snack
              </option>
            </Input>
          </Col>

  
  </Row>
    </Container>
  )
}

export default SearchBar