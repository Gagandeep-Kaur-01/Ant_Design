import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../components/Sidebar/sidebar'
import Form from '../components/Pages/Form/form'

class App extends Component {
  render() {
    return(

      <BrowserRouter>
        <Sidebar /> 
        {/* <Form */}    
      </BrowserRouter>
     
    )
  }
}
export default App;
