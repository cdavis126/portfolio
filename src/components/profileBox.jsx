import '../styles/home.css';

const ProfileBox = () => {
  return (
    <section className="profile-box">
      <img src="/profile-pic.jpg" alt="Cherie" className="profile-pic" />
      <div className="profile-info">
        <p><strong>Location:</strong> Your City, State</p>
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
