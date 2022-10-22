import { useState} from 'react'
import './HomePage.scss'
import {RecipeContainer, SearchBar} from '../../components'

const APP_ID = "b4bcbc94"
const APP_KEY = '14781fb3ae1f72b0c5fbd53343415003'


const HomePage = () => {
  const [recipes, getRecipes] = useState ([]);
  const [query, setQuery] = useState("pizza")
  const [meal, setMeal] = useState("lunch")
  
   const getData = () => fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`)
    .then(res => res.json())
    .then(data => getRecipes(data.hits)) 
    
console.log(recipes)

  return (
    <div className='main'>
      <h1>Recipe App</h1>
      <SearchBar/>
      <RecipeContainer/>
    </div>
  )
}

export default HomePage