import { useState,useEffect} from 'react'
import './HomePage.scss'
import {RecipeContainer, SearchBar} from '../../components'

const APP_ID = "b4bcbc94"
const APP_KEY = '14781fb3ae1f72b0c5fbd53343415003'


const HomePage = ({props}) => {
  
  let [recipes, getRecipes] = useState ([]);
  const [query, setQuery] = useState("pizza")
  const [meal, setMeal] = useState("lunch")
  

   const getData = async () => {
    await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`)
    .then(res => res.json())
    .then(data  => getRecipes(data.hits))
    .catch(error => (getRecipes=[]))
   }


  useEffect(() =>{
   getData()
  }, [])
  
  console.log(recipes)

  // const getData = async () => {
  //   await fetch('file:///C:/Users/lawre/Coding/Front%20End/assignments-projects/recipe-app/src/assets/search.json')
  //   .then(res => res.json())
  //   .then(data  => getRecipes(data.hits)) }


  return (

    <div className='main'>
      <h1>Recipe App</h1>
      <SearchBar getData={getData} setQuery={setQuery} setMeal={setMeal} recipe={recipes}/> 
      <RecipeContainer recipes={recipes}/>
    </div>
  )
}

export default HomePage