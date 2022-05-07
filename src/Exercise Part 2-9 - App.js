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
    console.log('mounted')
    RecordHandler.getAll()
      .then(res=>{
      console.log(res)
      this.setState({persons:res.data})
      console.log(this.state.persons)

    })
  }

  addPerson=(newItem)=>{
    console.log('datarecive',newItem)
    RecordHandler.addRecord(newItem)
    .then(res=>{
      console.log(res)
      const persons=this.state.persons.concat(res.data)
      this.setState({persons})
    })
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