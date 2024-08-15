import NavbarContent from './components/navbar';
import Jumbotron from './components/jumbotron';
import ProfileContent from './components/profile';
import ProjectContent from './components/project';
import Content from './components/content';
import ContactContent from './components/contact';

function App() {
  return (
    <div className="main-container">
      <nav className="navbar">
        <NavbarContent />
      </nav>

      <header className="jumbotron">
        <Jumbotron />
      </header>

      <main className="content-container">
        <ProfileContent />
        <ProjectContent />
        <Content />
      </main>

      <footer id="contact" className="contact">
        <ContactContent />
      </footer>
    </div>
  );
}

export default App;
