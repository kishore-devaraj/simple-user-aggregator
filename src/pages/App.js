import React, { Component } from 'react';
import Table from '../components/table/Table'
import CustomInput from '../components/custom-input/CustomInput'
import CustomButton from '../components/custom-button/CustomButton'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.state = {
      listOfNames: []
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    let user = e.target.addInput.value
    e.target.addInput.value = ''
    let createdAt = new Date().toLocaleString('en-US', {
      'hour': 'numeric',
      'minute': 'numeric',
      'hour12': true
    })

    // State Object should be immutable
    let newListOfNames = this.state.listOfNames.slice()
    newListOfNames.push({
      user,
      createdAt
    })
    this.setState({
      listOfNames: newListOfNames
    })
  }

  handleDelete (e) {
    e.preventDefault()
    let indexToBeDeleted = e.target.id - 1
    let newListOfNames = this.state.listOfNames.slice()
    newListOfNames = newListOfNames.filter((name, index) => {
      return index === indexToBeDeleted ? false : name
    })
    this.setState({listOfNames: newListOfNames})
  }

  render() {
    return (
      <main className="app">
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <CustomInput 
              label="Simple User Aggregator" 
              placeholder="Type here to add it" 
              id="addInput"
              name="checklist-input-field"/>
            <CustomButton 
            buttonText='Submit' 
            handleSubmit={this.handleSubmit}/>
          </form>
          <Table 
          listOfNames={this.state.listOfNames} 
          handleDelete={this.handleDelete}
          />
      </main>
    );
  }
}

export default App;
