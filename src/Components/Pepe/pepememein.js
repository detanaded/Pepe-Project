import React, {Component} from 'react';
import axios from 'axios';
import ShowPepe from './ShowPepe';
import './CSS/Hero.css';
import {bounceIn} from 'react-animations';
import styled, {keyframes} from 'styled-components';

const Bounce = styled.div`animation: 3s ${keyframes`${bounceIn}`} infinite `;


class Pepe extends Component {
  constructor(props){
    super(props);
    this.state = {
      pepe: [],
      pepeName:'',
      pepeImage:''
    }
  }

    componentDidMount(){
      this.handleGetPepe()
    }

handleName(val){
  this.setState({
    pepeName: val
    })
  }
  handleImage(val) {
    this.setState({
      pepeImage: val
    })
  }
  handleGetPepe = () => {
    axios.get('/api/pepe')
    .then(res => {
      console.log(res.data)
      this.setState({
        pepe: res.data
      })
     
    })
  }
  handleAddPepe = () => {
    axios.post('api/pepe', {name: this.state.pepeName, image: this.state.pepeImage})
    .then(res => {
      this.setState({
        pepe: res.data
      })
    })
    this.setState({pepeName: ''})
    this.setState({pepeImage: ''})
  }

  handleUpdatePepe = (data) => {
    this.setState({
      pepe:data
    })
  }
  handleDeletePepe = (data) => {
    this.setState({
      pepe:data
    })
  }
   render(){
        const mappedPepe = this.state.pepe.map((element, i) => {
            return (
                <ShowPepe key={i} 
                                pepe={element}
                                updatePepe={this.handleUpdatePepe}
                                deletePepe={this.handleDeletePepe}/>
            )
        })
        return(
            <div className='main-body'>
              <div className='hero1'>
              <Bounce><h1>meme'in since 05</h1></Bounce>
                </div>
              <div className='btn-body'>
                    <input 
                        onChange={(e) => this.handleName(e.target.value)}
                        value={this.state.pepeName}
                        placeholder='Enter Meme' />
                    <input 
                        onChange={(e) => this.handleImage(e.target.value)}
                        value={this.state.pepeImage}
                        placeholder='Enter Image URL' />
                    <button onClick={this.handleAddPepe}>Add Pepe</button>
                </div>
                <div className='pepe'>
                    {mappedPepe}
                </div>
            </div>
        ) 
   }
  }

  export default Pepe;