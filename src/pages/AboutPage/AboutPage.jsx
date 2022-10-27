import { LoggedOutMessage } from "../../components"
import { ConstainerDiv, TopLeftDiv, TopRightDiv, MiddleRightDiv, MiddleLeftDiv, BottomDiv} from "./AboutPageStyle"
import photo from "../../assets/IMG_4494.jpg"
import design from "../../assets/design.jpg"



const AboutPage = ({loggedIn}) => {
  return (
    <ConstainerDiv>
      <TopLeftDiv>
        <div>
        <h2>Creative</h2>
        <h2>UX/UI Designer</h2>
        <h4>Dean Lawrence</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste optio temporibus.</p>
        <button>Contact Me</button>
        </div>

      </TopLeftDiv>
      <TopRightDiv>
        <img src={photo} alt="" />
      </TopRightDiv>
      <MiddleLeftDiv>
        <h3>I transform your ideas in remarkable digital products.</h3> 
      </MiddleLeftDiv>
      <MiddleRightDiv>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dignissimos? Vel provident ipsa commodi ad.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dignissimos? Vel provident ipsa commodi ad.</p>
        <a href="">Download My Resume</a>
      </MiddleRightDiv>
      {/* <BottomDiv>
        <h3>
          Recent Work
        </h3>
        <img src={design} alt="" />
      </BottomDiv> */}

    </ConstainerDiv>



    // <div className="about-container">
    //   <div className="child-1">1</div>
    //   <div className="child-2">2</div>
    //   <div className="child-3">3</div>
    //   <div className="child-4">4</div>
    //   <div className="child-5">5</div>
    // </div>
  )

}

export default AboutPage