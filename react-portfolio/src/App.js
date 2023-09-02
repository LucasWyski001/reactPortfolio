import logo from './logo.svg';
import './App.css';
// for some reason this is red but file works? but when it fixes it errors?
import { NavBar } from './components/NavBar';
import {Hero} from './components/Hero';
import { Skills } from './components/Skills';
import {Projects} from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
