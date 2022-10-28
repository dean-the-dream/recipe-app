import {Routes, Route} from 'react-router-dom';
import {NavigationBar} from './components';
import {AboutPage, HomePage, LoginPage, RecipePage, LogoutPage} from "./pages"


function App() {

  return (
    <>
  
      <NavigationBar />
  
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/' element={<HomePage />}/>
        <Route path='/home'  element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/recipie' element={<RecipePage/>}/>
        <Route path='/loggedout' element={<LogoutPage/>}/>
      </Routes>
    
    
    </>
  )
}

export default App
 