import React from 'react'

import Navbar from './Navbar'
import Content from './Content/Content'
import Footer from './Footer'
 

function MainPanel (){
    return (
        <div className="main-panel">   
                <Navbar/>
                <Content/>
                <Footer/>   
        </div>
              
    )
}
export default MainPanel