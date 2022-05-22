import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  changeHandler=(event)=>{
    this.setState({newName:event.target.value})
  }
  
  addPerson=(event)=>{
    event.preventDefault()
    const personOpject = {
      name:this.state.newName
    }
    const persons=this.state.persons.concat(personOpject)
    this.setState({persons,newName:''})
  }

  render() {

    const Display = () =>{
      return(
        this.state.persons.map(person=>
          <li key={person.name}>{person.name}</li>)
      )
    }

    return (
      
      <div>
        <div>
          debug: {this.state.newName}
        </div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input onChange={this.changeHandler}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
          <Display />
      </div>
    )
  }
}

export default App