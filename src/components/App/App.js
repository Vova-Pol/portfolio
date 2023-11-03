import { Footer } from '../Footer/Footer';
import { Greeting } from '../Greeting/Greeting';
import { Header } from '../Header/Header';
import { Projects } from '../Projects/Projects';
import { Quote } from '../Quote/Quote';
import { Stack } from '../Stack/Stack';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Greeting />
        <Projects />
        <Quote />
        <Stack />
        <section id="movie-explorer" className="movie-explorer"></section>
        <section id="traveler" className="traveler"></section>
        <section id="contacts" className="contacts"></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
