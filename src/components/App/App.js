import { Footer } from '../Footer/Footer';
import { Greeting } from '../Greeting/Greeting';
import { Header } from '../Header/Header';
import { Projects } from '../Projects/Projects';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Greeting />
        <Projects />
        <section id="skills" className="skills"></section>
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
