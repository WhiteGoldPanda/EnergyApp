import React, { Component } from 'react'
import axios from 'axios';
import Intensity from './Components/Intensity';
import Generation from './Components/Generation';
import Factor from './Components/Factor';







export default class App extends Component {


    constructor(props){
        super(props);
        this.state = {
            intensity: [],
            intensity_factors: [],
            generation: [],
        }
    }
    componentDidMount() {
        axios.get('https://api.carbonintensity.org.uk/intensity')
        .then(
          response => {
            this.setState({intensity: response.data.data});
            console.log(this.state.intensity);
          }
        )
        .catch(
          error => {
            console.log(`An error has occured with the intensity call ${error}`);
          }
        )
        
        axios.get('https://api.carbonintensity.org.uk/intensity/factors')
        .then(
          response => {
            this.setState({intensity_factors: response.data.data});
            
          }
        )
        .catch(
          error => {
            console.log(`An error has occured with the factors call ${error}`);
          }
        )
    
        axios.get('https://api.carbonintensity.org.uk/generation')
        .then(
          response => {
            console.log(response.data.data.generationmix);
            this.setState({generation: response.data.data.generationmix});
          }
        )
        .catch(
          error => {
            console.log(`An error has occured with the generation call ${error}`);
          }
        )
    
    
    
    
    
    
    
      }
  render() {

    return (
      <React.Fragment>
        
        <Intensity intensity={this.state.intensity}/>
          <Factor intensity_factors={this.state.intensity_factors}/>
          <Generation generation={this.state.generation}/>
      </React.Fragment>
    )
  }
}

