import React, {Component} from 'react';
import axios from 'axios';


class ShowPepe extends Component{
  constructor(props) {
    super(props);
      this.state = {
        edit: false,
        editName: ''
      }
    }
    handleToggle = () => {
      this.setState({
        edit: !this.state.edit
      })
    }
    handleInput(val){
      this.setState({editName: val})
    }

    handleUpdatePepe(id){
      let updatePepe = {
        name:this.state.editName
      }
      axios.put(`/api/pepe/${id}`, updatePepe)
      .then(res => {
        this.props.updatePepe(res.data)
        this.handleToggle();
      })
    }
    handleDeletePepe = ()=> {
      axios.delete(`/api/pepe ${this.props.pepe.id}`)
      .then(res => {
        this.props.deletePepe(res.data)
      })
    }

    render(){
      return (
      <div>
          {!this.state.edit
          ?(<div className='pepe-boxes'>
              <h4 className='pepe-name'>{this.props.pepe.name}</h4>
              <img src={this.props.pepe.image} alt='' className='pepepics'/>
              <button onClick={this.handleToggle}>Edit</button>
              <button onClick={this.handleDeletePepe}>Delete</button>
          </div>) : (
          <div className='pepe-boxes'>
              <input
                  onChange = {(e) => this.handleInput(e.target.value)}
                  value = {this.state.editName}
                  placeholder = 'Edit Name Here'/>
              <img src={this.props.pepe.image} alt='' className='pepepics'/>
              <button onClick={() => this.handleUpdatePepe(this.props.pepe.id)}>Submit</button>
              <button onClick={this.handleDeletePokemon}>Delete</button>
          </div>
          )}
      </div>
  )
  }

  }



export default ShowPepe;