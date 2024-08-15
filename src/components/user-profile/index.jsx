import UserImage from '/src/assets/user-image.jpg';

const UserProfile = ({ children, imageHandleClick, userImageRef }) => {
  return (
    <span className='user-contact'>
      <img src={UserImage} alt="image" ref={userImageRef} onClick={imageHandleClick} />
      {children}
    </span>
  );
};

export default UserProfile;
