import React, { Component } from 'react';
import './App.css';
import Youtube from './components/Youtube';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" >flowstyle.live</h1>
        </header>
         {/* <h2>This site is under construction. Check back later!</h2> */}
          <Youtube />
      </div>
    );
  }
}



export default App;
