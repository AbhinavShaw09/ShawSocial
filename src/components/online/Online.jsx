import "./online.css";

export default function Online({user}) {
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img
            src={user.profilePicture}
            alt=""
            className="rightbarProfileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <div className="rightbarUserName">{user.username}</div>
      </li>
    </div>
  );
}
