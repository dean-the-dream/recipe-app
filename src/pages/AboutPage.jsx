import { LoggedOutMessage } from "../components"


const AboutPage = ({loggedIn}) => {
  return (
    loggedIn? <>
    <h1>About</h1>
    </>
    : <LoggedOutMessage/>
  )
  console.log(loggedIn)
}

export default AboutPage