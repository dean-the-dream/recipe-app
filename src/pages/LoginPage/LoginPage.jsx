import './LoginPage.scss'
import LoginSection from '../../components/LoginSection/LoginSection'


const LoginPage = ({login, loggedIn}) => {
// console.log(loggedIn, "page")
  return (
    <div className='main-login'>
      <LoginSection setLogin={login} loggedIn={loggedIn}/>
    </div>
  )
}

export default LoginPage