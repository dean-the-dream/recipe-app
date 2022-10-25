import { LoggedOutMessage } from "../components"
import { Card, CardText, CardTitle, CardBody, CardImg } from "reactstrap"


const AboutPage = ({loggedIn}) => {
  return (
    loggedIn? <Card className="my-2 mt-5">
    <CardBody>
      <CardTitle tag="h5">
        About Me
      </CardTitle>
      <CardText>
        This is page is underconstruction.
      </CardText>
    </CardBody>
    <CardImg
      alt="Card image cap"
      bottom
      src="https://picsum.photos/900/180"
      style={{
        height: 180
      }}
      width="100%"
    />
  </Card>
    : <LoggedOutMessage/>
  )
  console.log(loggedIn)
}

export default AboutPage