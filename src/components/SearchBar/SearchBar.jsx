import "./SearchBar.scss"
import {Input, Button, Container, Row, Col, FormFeedback, FormGroup, Form} from 'reactstrap'

const SearchBar = ({handleSearchClick, validInput, handleInputClick}) => {
	
  

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
                    <Button
          onClick={() => handleSearchClick(document.querySelector(".query").value, document.querySelector(".type").value)}>
            Search
          </Button>
          </Col>
          <Col >
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
            
              <option onClick={() => handleInputClick()} value="breakfast">
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
              
            </Input> :<><Input 
		      className='type mb-0'
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
            </Input>
            <FormFeedback tooltip>
            Please Choose A Meal Type!
            </FormFeedback>
            </> 
            } 
             
            
          </FormGroup>
          </Col>



        </Row>
      </Container>
              
    </Form>
  )
}

export default SearchBar