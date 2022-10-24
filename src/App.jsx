import {Routes, Route} from 'react-router-dom';
import BrowserBar from './components/BrowserBar/BowserBar';
import {AboutPage, HomePage, LoginPage, RecipePage} from "./pages"
import { useState } from 'react';


function App() {
  const [login, setLogin] = useState(false)

  return (
    <>
    <BrowserBar/>
    <Routes>
      <Route path='/login' element={<LoginPage loggedIn={login} setLogin={setLogin}/>}/>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/home'  element={<HomePage loggedIn={login}/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/recipie' element={<RecipePage/>}/>
    </Routes>
    </>
  );
}

export default App;
 