import Brand from './Brand';
import Toggle from './Toggle';
import Menu from './Menu';
import UserProfile from '../user-profile';
import Socials from '../social';
import useToggleMenu from '../../hooks/useToggleMenu';
import useUserImage from '../../hooks/useUserImage';

const NavbarContent = () => {
  const { isMenuActive, toggleHandleClick, menuRef, toggleMenuRef, navlinkRef } = useToggleMenu();
  const { isOpenSocial, imageHandleClick, userImageRef, userTextRef, socialRef } = useUserImage();

  return (
    <>
      <div className="brand">
        <Brand />
        <Toggle isMenuActive={isMenuActive} toggleHandleClick={toggleHandleClick} toggleMenuRef={toggleMenuRef} />
      </div>

      <div className="menu" ref={menuRef}>
        <Menu navlinkRef={navlinkRef} />
        <div className="user-profile">
          <UserProfile isOpenSocial={isOpenSocial} imageHandleClick={imageHandleClick} userImageRef={userImageRef}>
            <span ref={userTextRef}>
              <h1>👋 Hi, I'm Dedi.</h1>
              <p>Let's get connected:</p>
            </span>
          </UserProfile>

          <ul ref={socialRef}>
            <Socials />
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarContent;
