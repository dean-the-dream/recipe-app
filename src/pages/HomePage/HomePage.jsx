import {useEffect, useState} from 'react'
import './HomePage.scss'
import SearchBar from '../../components/SearchBar/SearchBar'

const HomePage = () => {
  const [recipes, getRecipes] = useState ([])
  useEffect(() => {
    fetch("https://api.edamam.com/api/recipes/v2")
    .then(res => res.json())
    .then(data => getRecipes(data))
  })
  
console.log(recipes)

  return (
    <div className='main'>
      <h1>Recipe App</h1>
      <SearchBar/>
    </div>
  )
}

export default HomePage