import React from 'react';
 import {BrowserRouter} from 'react-router-dom'
import Sidebar from './Components/Sidebar';
import MainPanel from './Components/MainPanel/MainPanel';
 


function App(){
  return (
    <div className="wrapper">
       <BrowserRouter>
          <Sidebar/>
          <MainPanel/>
       </BrowserRouter> 
    </div>
  )
}
export default App;
