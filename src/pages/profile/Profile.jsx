import "./profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";

export default function Profile() {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileCover">
            <div className="profileRightTop">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
            </div>
            <div className="profileRightTop">
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Abhinav Shaw</h4>
              <span className="profileInfoDesc">
                Hello Friends!!!
              </span>
            </div>
          </div>

          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </div>
  );
}
