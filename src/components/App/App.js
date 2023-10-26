import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section id="skills" className="skills"></section>
        <section id="projects" className="projects"></section>
        <section className="quote"></section>
        <section id="movie-explorer" className="movie-explorer"></section>
        <section id="traveler" className="traveler"></section>
        <section id="contacts" className="contacts"></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
