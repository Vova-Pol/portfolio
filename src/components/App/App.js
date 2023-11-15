import { Education } from '../Education/Education';
import { Footer } from '../Footer/Footer';
import { Greeting } from '../Greeting/Greeting';
import { Header } from '../Header/Header';
import { Projects } from '../Projects/Projects';

import { Stack } from '../Stack/Stack';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Greeting />
        <Education />
        <Projects />
        <Stack />
        <section id="contacts" className="contacts"></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
