import { useState, useEffect, useRef} from 'react'
import './HomePage.scss'
import {RecipeContainer, SearchBar, LoggedOutMessage} from '../../components'
import { useContext } from 'react'
import { LoggedInContext } from '../../contexts/LoggedInContext'

const APP_ID = process.env.REACT_APP_ID
const APP_KEY = process.env.REACT_APP_KEY




const HomePage = () => {

	let [recipes, getRecipes] = useState ([]);
	const [query, setQuery] = useState("")
	const [meal, setMeal] = useState("")
	const [validInput, setValidInput] = useState(true)
	const isMounted = useRef(false);
	const context = useContext(LoggedInContext);
		
  
  	const getData = async () => {
		await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`)
		.then(res => res.json())
		.then(data  => getRecipes(data.hits))
	}

	const handleSearchClick = (mealSearh, typeSelect) => {
		if((typeSelect !== "Meal Type") ){
			setQuery(mealSearh);
			setMeal(typeSelect);
			setValidInput(true)
		} else {
			setValidInput(false)
		}


	}

	const handleInputClick = () => {
		setValidInput(true)
		console.log("valid input")
	}
		
  useEffect(() =>{
	if(isMounted.current){
		getData()
	} else {
		isMounted.current = true
	}

  }, [meal, query])
  

  return (

    context.isLoggedIn ? <div className='main'>
      <SearchBar {...{handleSearchClick, validInput, handleInputClick}}/>  
      <RecipeContainer recipes={recipes}/>
    </div>
	: <LoggedOutMessage/>
  )
}


export default HomePage