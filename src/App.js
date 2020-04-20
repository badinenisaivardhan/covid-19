import React from 'react';
import './App.css';
import Cards from './components/Cards';
//import styles from './App.module.css';
import {fectchData} from './components/Api';

class App extends React.Component {
    state={
      data:{},
    }

  async componentDidMount(){
    const fetechedData = await fectchData();
    this.setState({data : fetechedData});
  }
  render(){
  return (
   <div className="container">
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
      <h1 style={{ color: 'white' }} align="center">COVID-19 Cases in INDIA</h1>
      <Cards data={this.state.data}/>
      <br></br>
   
      <h5 style={{ color: 'white' }} align="center">Source : www.covid19india.org</h5>
      <br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br>
    </div>
  );
}
}

export default App;
