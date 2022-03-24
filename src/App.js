import './App.css';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Calc from './pages/Calc';
import NoPage from './pages/NoPage';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes, Switch
} from "react-router-dom";


function App() {
  return (

    <div className="App">

      <Router>
      <div className='links'>
        <Link to="" className='space'> <b>Home </b></Link>
        <Link to="/blogs" className='space'>  Blogs </Link>
        <Link to="/contect" className='space'> Contact </Link>
        <Link to="/calculator" className='space'> Calculator </Link>



      </div>
      <Switch>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/contect" element={<Contact/>}/>
          <Route path="/nopage" element={<NoPage/>}/>
          <Route path="/calculator" element={<Calc/>}/>
          <Route path="*" element={<NoPage/>}/>
         
        </Routes>
        </Switch>


      </Router>


    </div>
  );
}

export default App;
