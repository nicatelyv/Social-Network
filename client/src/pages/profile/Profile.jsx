import "./profile.scss"
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"
import PinterestIcon from "@mui/icons-material/Pinterest"
import TwitterIcon from "@mui/icons-material/Twitter"
import PlaceIcon from "@mui/icons-material/Place"
import LanguageIcon from "@mui/icons-material/Language"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import Posts from "../../components/posts/Posts"
import { makeRequest } from "../../axios"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useLocation } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext"
import Update from "../../components/update/Update"


const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false)
  const { currentUser } = useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split("/")[2])
  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  )


  const { isLoading: rIsLoading, data: relationshipData } = useQuery(["relationship"], () =>
    makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
      return res.data;
    })
  )


  const queryClient = useQueryClient()
  const mutation = useMutation((following) => {
    if (following) return makeRequest.delete("/relationships?userId=" + userId)
    return makeRequest.post("/relationships", { userId })
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(["relationship"])
    },
  })
  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id))
  }

  return (
    <div className="profile">
      {isLoading ? "Yüklənir ..."
        : error ? "Xəta baş verdi!"
          : <>
            <div className="images">
              {/* <img src={"/upload/" + data.coverPic} alt="" className="cover" /> */}
              <img src={data.coverPic} alt="" className="cover" />
              <img src={data.profilePic} alt="" className="profilePic" />
              {/* <img src={"/upload/" + data.profilePic} alt="" className="profilePic" /> */}
            </div>
            <div className="profileContainer">
              <div className="uInfo">
                <div className="left">
                  <a target="/" href="http://facebook.com"><FacebookTwoToneIcon /></a>
                  <a target="/" href="http://facebook.com"><InstagramIcon /></a>
                  <a target="/" href="http://facebook.com"><TwitterIcon /></a>
                  <a target="/" href="http://facebook.com"><LinkedInIcon /></a>
                  <a target="/" href="http://facebook.com"><PinterestIcon /></a>
                </div>
                <div className="center">
                  <span>{data.name}</span>
                  <div className="info">
                    {(data.city || data.website) ? <>
                      {data.city ? <div className="item">
                        <PlaceIcon />
                        <span>{data.city}</span>
                      </div> : <></>}
                      {data.website ? <div className="item">
                        <LanguageIcon />
                        <a target="/" href={data.website}>{data.website}</a>
                      </div> : <></>}</> : <div className="item"><span>Məlumat yoxdur</span></div>}
                  </div>
                  {rIsLoading ? "Yüklənir ..." : userId === currentUser.id ?
                    (<button onClick={() => setOpenUpdate(true)}>Update</button>)
                    : (<button onClick={handleFollow}>{relationshipData.includes(currentUser.id) ? "Following" : "Follow"}</button>)}
                </div>
                <div className="right">
                  <EmailOutlinedIcon />
                  <MoreVertIcon />
                </div>
              </div>
              <Posts userId={userId} />
            </div>
            {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
          </>
      }
    </div>
  )
}

export default Profile