import './LoginPage.scss'
import LoginSection from '../../components/LoginSection/LoginSection'


const LoginPage = ({setLogin, loggedIn}) => {
console.log(loggedIn, "page")
  return (
    <div className='main-login'>
      <LoginSection setLogin={setLogin} loggedIn={loggedIn}/>
    </div>
  )
}

export default LoginPage