import './App.css';
import React, {Component} from 'react';
import Weatherapp from "./components/Weatherapp"
import ReactDOM from 'react-dom'; 

class App extends Component {
  
  render() {
    return (
      <div className="app" >
        <Weatherapp/>
    </div>
    );
  }
}
ReactDOM.render( 
  <App/>, 
  document.getElementById('root') 
); 

export default App;
