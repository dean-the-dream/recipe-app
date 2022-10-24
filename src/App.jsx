import {Routes, Route} from 'react-router-dom';
import {NavigationBar} from './components';
import {AboutPage, HomePage, LoginPage, RecipePage, LogoutPage} from "./pages"
import { useState } from 'react';


function App() {
  const [loggedIn, setLogin] = useState(false)
  const logInOrOut = () => {
    setLogin(!loggedIn)
  }

  return (
    <>
    <NavigationBar {...{logInOrOut, loggedIn}}/>
    <Routes>
      <Route path='/login' element={<LoginPage loggedIn={loggedIn}/>}/>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/home'  element={<HomePage loggedIn={loggedIn}/>}/>
      <Route path='/about' element={<AboutPage loggedIn={loggedIn}/>}/>
      <Route path='/recipie' element={<RecipePage/>}/>
      <Route path='/loggedout' element={<LogoutPage/>}/>
    </Routes>
    </>
  )
}

export default App
 