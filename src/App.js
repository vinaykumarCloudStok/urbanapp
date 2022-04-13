import React from 'react'
import './App.css';
import Nav from './component/navbar/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './pages/about';
import Contact from './pages/contact';

function App() {
return(

 <>
<BrowserRouter>
<Nav/>
<Routes>
<Route exact path='/about' element={<About/>}/>
<Route exact path='/contact' element={<Contact/>}/>
</Routes>
</BrowserRouter>
 </>
  );
}

export default App;
