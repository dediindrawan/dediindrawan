import ProfileImage from '/src/assets/profile-image.webp';

const Profile = () => {
  return (
    <figure className="profile-description">
      <img src={ProfileImage} alt="image" loading="lazy" className="reveal-left" />
      <figcaption>
        <article className="reveal-bottom">
          As a passionate Front End Developer with over one year of experience, I specialize in crafting responsive and user friendly websites using React.js, TailwindCSS, and JavaScript. I am currently enhancing my skills in React.js to
          build more dynamic and efficient web applications. Additionally, I create web programming content, sharing insights and tutorials to help others learn and grow in the field.
        </article>
      </figcaption>
    </figure>
  );
};

export default Profile;
