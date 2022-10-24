import {Routes, Route} from 'react-router-dom';
import {NavigationBar} from './components';
import {AboutPage, HomePage, LoginPage, RecipePage, LogoutPage} from "./pages"
import { useState, useEffect, useRef} from 'react';


function App() {
  const isCurrent = useRef(false)
  const [loggedIn, setLogin] = useState(false)
  const logInOrOut = (x) => {
    setLogin(x)
    console.log("I ran")
    console.log(x)
  }
 console.log(loggedIn, "loggedIn Value")
//   useEffect(() => 
//   {
//     logInOrOut(loggedIn)
// }, [loggedIn])

  return (
    <>
    <NavigationBar {...{logInOrOut, loggedIn}}/>
    <Routes>
      <Route path='/login' element={<LoginPage loggedIn={loggedIn} login={logInOrOut}/>}/>
      <Route path='/' element={<HomePage logIn={loggedIn}/>}/>
      <Route path='/home'  element={<HomePage logIn={loggedIn}/>}/>
      <Route path='/about' element={<AboutPage loggedIn={loggedIn}/>}/>
      <Route path='/recipie' element={<RecipePage/>}/>
      <Route path='/loggedout' element={<LogoutPage/>}/>
    </Routes>
    </>
  )
}

export default App
 