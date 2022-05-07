import React from 'react';

import Directory from './components/Directory';
import AddNew from './components/AddNew';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { 
          name: 'Arto Hellas',
          phone: '040-123456'
       }
      ],
      newName: '',
      newNumber:''
    }
  }

  addPerson=(newItem)=>{
    console.log('datarecive',newItem)
    const persons=this.state.persons.concat(newItem)
    this.setState({persons,})
    }
  

  render() {
    return (
      <div>
        <AddNew persons={this.state.persons} addRecord={this.addPerson} />
        <Directory persons={this.state.persons} />
      </div>
    )
  }
}

export default App