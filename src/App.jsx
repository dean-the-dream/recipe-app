import {Routes, Route} from 'react-router-dom';
import BrowserBar from './components/BrowserBar/BowserBar';
import {AboutPage, HomePage, LoginPage, RecipePage} from "./pages"


function App() {
  return (
    <>
    <BrowserBar/>
    <Routes>
      <Route path='/'  element={<HomePage/>}/>
      <Route path='/home'  element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/recipie' element={<RecipePage/>}/>
    </Routes>
    </>
  );
}

export default App;
