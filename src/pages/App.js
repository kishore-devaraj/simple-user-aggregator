import React, { Component } from 'react';
import Table from '../components/table/Table'
import CustomInput from '../components/custom-input/CustomInput'
import CustomButton from '../components/custom-button/CustomButton'
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="app">
          <header>
            <CustomInput 
              label="Use me" 
              placeholder="Type here to add it" 
              name="checklist-input-field"/>
            <CustomButton buttonText='Submit' />
          </header>
          <Table />
      </main>
    );
  }
}

export default App;
