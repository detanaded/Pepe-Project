import React, {Component} from 'react'
import './CSS/Nav.css'
import {fadeInLeft} from 'react-animations';
import styled, {keyframes} from 'styled-components';

const Fade = styled.div`animation: 3s ${keyframes`${fadeInLeft}`} `;

class Navbar extends Component { 



  render(){
    return(
      <div className ='header'>
        <Fade><h1 className='navtitle'>Pepe Meme'in</h1></Fade>
        </div>
    )
  }
}

export default Navbar