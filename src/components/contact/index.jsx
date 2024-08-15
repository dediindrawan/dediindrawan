import Contact from './Contact';
import SocialMedia from './Social';
import Copyright from './Copyright';

const ContactContent = () => {
  return (
    <div className="contact-wrapper">
      <section className="contact-profile">
        <h1 className="section-title">Contact Me</h1>

        <Contact />
      </section>

      <SocialMedia />
      <Copyright />
    </div>
  );
};

export default ContactContent;
