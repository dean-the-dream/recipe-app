import "./SearchBar.scss"
import {Input, Button, FormFeedback, Container, Form} from 'reactstrap'

const SearchBar = ({handleSearchClick, validInput, handleInputClick}) => {
	const invalid = false
  

  return (
	<Container className="formwrapper">
		<Form className="form-align">
	<Input className='query'
	id="exampleSearch"
	name="search"
	placeholder="Search"
	type="search"
	/>

	<Button
	onClick={() => handleSearchClick(document.querySelector(".query").value, 
	document.querySelector(".type").value)}>
		Search
	</Button>
	<div className="select-input">
		<Input 
		className='type mb-0'
		id="exampleSelect"
		name="select"
		type="select"
		defaultValue={"Meal Type"}
		invalid = {!validInput}
		// {()=> {invalid}}
		onChange={() => handleInputClick()}
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
		<option  value="dinner">
		Dinner
		</option>
		<option  value="snack">
		Snack
		</option>
		</Input>
		{!validInput&&<FormFeedback tooltip>
		Please Choose A Meal Type!
		</FormFeedback>}
	</div>
</Form>
	</Container>

  )
}

export default SearchBar