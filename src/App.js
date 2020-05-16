import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Logo from './components/Logo'
import Imagelink from './components/Imagelink'
import Rank from './components/Rank'
import Particles from 'react-particles-js';

const par ={
 particles:{
   number:{
     value:120,
     density:{
       enable:true,
       value_area:500
     }
   },
 },
 interactivity:{
  onhover:{
    enable:true,
    mode: 'grab',
  }
 }
}

class App extends React.Component{
  render(){
    return (
      <div className="App">
      <Particles className='particle'
      params={par} />
        <Nav />
        <Logo />
        <Rank />
        <Imagelink />
        {/*<Facerec />*/}
      </div>
    );

  }
}

export default App;
