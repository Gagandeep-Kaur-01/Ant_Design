import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../components/Sidebar/sidebar'

class App extends Component {
  render() {
    return(

      <BrowserRouter>
        <Sidebar />    
      </BrowserRouter>
     
    )
  }
}
export default App;
