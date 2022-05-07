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
  
  checkDuble=(event)=>{
    event.preventDefault()
    const existPersons=this.state.persons.map(person=>(person.name))
    console.log(existPersons)
    if (existPersons.includes(this.state.newName)){
      alert('This person already exist in directory !')
    } else {
      this.addPerson(event)
    }
  }

  addPerson=(event)=>{
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
        <form onSubmit={this.checkDuble}>
          <div>
            nimi: <input 
                  placeholder='type new name'
                  value={this.state.newName}
                  onChange={this.changeHandler}/>
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