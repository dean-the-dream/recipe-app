import { useState, useEffect, useRef} from 'react'
import './HomePage.scss'
import {RecipeContainer, SearchBar} from '../../components'
import { useNavigate, useLocation } from 'react-router-dom'

const APP_ID = "b4bcbc94"
const APP_KEY = '14781fb3ae1f72b0c5fbd53343415003'



const HomePage = ({props}) => {
	const location = useLocation();
	let [recipes, getRecipes] = useState ([]);
	const [query, setQuery] = useState("")
	const [meal, setMeal] = useState("")
	const [validInput, setValidInput] = useState(true)
	const isMounted = useRef(false);
		
  
  	const getData = async () => {
		await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`)
		.then(res => res.json())
		.then(data  => getRecipes(data.hits))
	}

	const handleSearchClick = (mealSearh, typeSelect) => {
		if((typeSelect !="Meal Type") ){
			setQuery(mealSearh);
			setMeal(typeSelect);
			setValidInput(true)
		} else {
			setValidInput(false)
		}
		
	
	}

  useEffect(() =>{
	if(isMounted.current){
		getData()
		console.log(recipes)
	} else {
		isMounted.current = true
	}

  }, [meal, query])
  



  return (

    <div className='main'>
      {!true? 
       <h1>Recipe App</h1>
      : <>
      <h1>Recipe App</h1>
      <SearchBar {...{handleSearchClick, validInput}}/>  
      <RecipeContainer recipes={recipes}/>
      </>}
      
    </div>
  )
}

export default HomePage