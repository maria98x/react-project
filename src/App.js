

import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import Team from './Team'

function App() {
  return (
<div>
  <Nav />
  <Routes> 
    <Route exact path="/Home" element={<Home />}> </Route>
    <Route exact path="/About" element={<About />}> </Route>
    <Route exact path="/Contact" element={<Contact />}> </Route>
    <Route exact path="/Products" element={<Products />}> </Route>
    <Route exact path="/Team" element={<Team />}> </Route>
  </Routes>
  
</div>
  );
}

export default App;

