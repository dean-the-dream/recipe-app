import { useState,useEffect} from 'react'
import './HomePage.scss'
import {RecipeContainer, SearchBar} from '../../components'
import { useNavigate, useLocation } from 'react-router-dom'

const APP_ID = "b4bcbc94"
const APP_KEY = '14781fb3ae1f72b0c5fbd53343415003'



const HomePage = ({props}) => {
  const location = useLocation();
  let [recipes, getRecipes] = useState ([]);
  const [query, setQuery] = useState("eggs")
  const [meal, setMeal] = useState("breakfast")
  // const {login} = props;
  

   const getData = async () => {
    await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`)
    .then(res => res.json())
    .then(data  => getRecipes(data.hits))
    // .catch(error => console.error("this is an error", error))
    
   }


  // useEffect(() =>{
  //  getData()
  // }, [])
  
  // console.log(recipes, "recipe object")
  console.log(location, "state")



  return (

    <div className='main'>
      {!true? 
       <h1>Recipe App</h1>
      : <>
      <h1>Recipe App</h1>
      <SearchBar getData={getData} setQuery={setQuery} setMeal={setMeal} recipe={recipes}/>  
      <RecipeContainer recipes={recipes}/>
      </>}
      
    </div>
  )
}

export default HomePage