// need to prob add import logo from './logo.svg
import './App.css';
// for some reason this is red but file works? but when it fixes it errors?
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import {Hero} from './components/Hero';
import { Skills } from './components/Skills';
import {Projects} from './components/Projects';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
