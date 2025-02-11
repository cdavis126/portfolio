import '../styles/home.css';
import profilePic from '../assets/cherieprofilepic.jpg'; // don't forget to link image

const ProfileBox = () => {
  return (
    <section className="profile-box">
      <h1 className="profile-name">Cherie Davis</h1>
      <img src={profilePic} alt="Cherie" className="profile-pic" />
      <div className="profile-info">
        <p><strong>Location:</strong> Lexington, KY</p>
        <p><strong>Pronouns:</strong> She/Her</p>
        <p><strong>Mood:</strong> 😊 Feeling creative</p>
        <div className="profile-links">
          <a href="/portfolio">View My Portfolio</a> | 
          <a href="/about">About Me</a>
        </div>
      </div>
    </section>
  );
};

export default ProfileBox;


