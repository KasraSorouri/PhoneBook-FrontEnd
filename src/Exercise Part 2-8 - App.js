import React from 'react';
import axios from 'axios'

import Directory from './components/Directory';
import AddNew from './components/AddNew';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber:''
    }
  }

  componentDidMount(){
    console.log('mounted')
    axios
    .get('http://localhost:3001/persons')
    .then(res=>{
      console.log(res)
      this.setState({persons:res.data})
      console.log(this.state.persons)

    })
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