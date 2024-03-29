import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Inotebook from './components/inotebook';
import Quora from './components/quora';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
          </Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
          <Route path='/inotebook' element={<Inotebook/>}></Route>
          <Route path='/quora' element={<Quora/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
