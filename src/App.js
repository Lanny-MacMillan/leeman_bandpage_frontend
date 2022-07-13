import './App.css';
import Home from './components/Home'
import About from './components/About'
import Music from './components/Music'
import Videos from './components/Videos'
import Merch from './components/Merch'
import Admin from './components/Admin'
import ResponsiveAppBar from './components/NavBar.js';
import { Route, Routes} from "react-router";

const App = () => {
  

    return (
      <>
        <ResponsiveAppBar/>
        <h1>Some shit about the band here</h1>
      <>
        <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='Home' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Music' element={<Music />} />
        <Route path='Videos' element={<Videos />} />
        <Route path='Merch' element={<Merch />} />
        <Route path='Admin' element={<Admin />} />
    </Routes>
    </>
      </>
    )
}

export default App;
