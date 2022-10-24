import "./SearchBar.scss"
import {Input, Button, Container, Row, Col, FormFeedback, FormGroup, Form} from 'reactstrap'

const SearchBar = ({handleSearchClick, validInput}) => {
	
  

  return (
    <Form>
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
          onClick={() => handleSearchClick(document.querySelector(".query").value, document.querySelector(".type").value)}>
            Search
          </Button>
          </Col>
          <Col>
          <FormGroup>
          {validInput ? <Input 
		      className='type'
              id="exampleSelect"
              name="select"
              type="select"
              defaultValue={"Meal Type"}
            >
              <option defaultValue disabled>
                Meal Type
              </option>
              <option value="breakfast">
                Breakfast
              </option>
              <option value="lunch">
                Lunch
              </option>
              <option  value="Dinner">
                Dinner
              </option>
              <option  value="snack">
                Snack
              </option>
            </Input> : <Input 
		      className='type'
              id="exampleSelect"
              name="select"
              type="select"
              defaultValue={"Meal Type"}
              invalid
            >
              <option defaultValue disabled>
                Meal Type
              </option>
              <option value="breakfast">
                Breakfast
              </option>
              <option value="lunch">
                Lunch
              </option>
              <option  value="Dinner">
                Dinner
              </option>
              <option  value="snack">
                Snack
              </option>
            </Input>} 
          
            {!validInput && <FormFeedback tooltip>
            Please Choose A Meal Type!
            </FormFeedback>}
            
          </FormGroup>
          </Col>



        </Row>
      </Container>
              
    </Form>
  )
}

export default SearchBar