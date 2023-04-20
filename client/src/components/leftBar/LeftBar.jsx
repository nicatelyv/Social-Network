import "./leftBar.scss"
import Friends from "../../assets/Friends.png"
import Groups from "../../assets/Groups.png"
import Market from "../../assets/Marketplace.png"
import Watch from "../../assets/Watch.png"
import Memories from "../../assets/Memories.png"
import Events from "../../assets/Events.jpeg"
import Gaming from "../../assets/Gaming.png"
import Gallery from "../../assets/Gallery.png"
import Videos from "../../assets/Videos.png"
import Messages from "../../assets/Messages.jpeg"
import Tutorials from "../../assets/Tutorials.jpeg"
import Courses from "../../assets/Courses.png"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"


const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePicture} alt="user" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar