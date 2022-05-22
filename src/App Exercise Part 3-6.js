import React from 'react';

import RecordHandler from './services/RecordHandler';
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
    RecordHandler.getAll()
      .then(res=>{
      this.setState({persons:res.data})
    })
  }

  addPerson=(newItem)=>{
    RecordHandler.addRecord(newItem)
    .then(res=>{
//      console.log(res.data)
      const persons=this.state.persons.concat(res.data)
      this.setState({persons})
    })
  }

  removeRecordOf =(person) =>{
    if (window.confirm(`Are you sure to remove ${person.name}?`)){
      RecordHandler.removeRecord(person.id)
      .then(res=>{
      this.setState({persons:this.state.persons.filter(n=>n.id !== person.id)})
      })
    }
  }

  render() {
    return (
      <div>
        <AddNew persons={this.state.persons} addRecord={this.addPerson} />
        <Directory persons={this.state.persons} removeRecord={this.removeRecordOf} />
      </div>
    )
  }
}

export default App