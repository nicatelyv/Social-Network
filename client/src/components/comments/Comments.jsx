import { useContext } from "react"
import {AuthContext} from "../../context/authContext"
import "./comments.scss"

const Comments = () => {
    const {currentUser} = useContext(AuthContext)
    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore at minima dolore atque nobis aliquam.",
            name: "Nicat",
            userId: 1,
            profilePic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore at minima dolore atque nobis aliquam.",
            name: "Nicat",
            userId: 2,
            profilePic: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
    ]
    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePicture} alt="" />
                <input type="text" placeholder="Write a comment"/>
                <button>Send</button>
            </div>
            {comments.map(comment => (
                <div className="comment">
                    <img src={comment.profilePic} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))}
        </div>

    )
}

export default Comments