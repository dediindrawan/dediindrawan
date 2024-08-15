import Profile from './Profile';
import Skills from './Skill';

const ProfileContent = () => {
  return (
    <div id="profile" className="profile">
      <h1 className="section-title">About Me</h1>
      <Profile />
      <Skills />
    </div>
  );
};

export default ProfileContent;
