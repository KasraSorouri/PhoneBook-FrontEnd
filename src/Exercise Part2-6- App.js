import React from 'react';

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

  changeHandler=(event)=>{
    this.setState({newName:event.target.value})
  }
  changeHandlerNumber=(event)=>{
    this.setState({newNumber:event.target.value})
  }


  addPerson=(event)=>{
    event.preventDefault()
    const existPersons=this.state.persons.map(person=>(person.name))
    if (existPersons.includes(this.state.newName)){
      alert('This person already exist in directory !')
    } else {
      const personOpject = {
        name:this.state.newName,
        phone:this.state.newNumber
      }
      const persons=this.state.persons.concat(personOpject)
      this.setState({persons,newName:'',newNumber:''})
    }
  }

  render() {

    const Display = () =>{
      return(
        <div>
        <table><tbody>
          {this.state.persons.map(person=>
          <tr key={person.name}>
          <td>{person.name}</td>
          <td>{person.phone}</td>
          </tr>
          )}
        </tbody></table>
        </div>
      )
    }

    return (
      
      <div>
        <div>
         debug: {this.state.newName} {this.state.newNumber}
        </div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input 
                  placeholder='type new name'
                  value={this.state.newName}
                  onChange={this.changeHandler}/>
          </div>
          <div>
            numero: <input 
            placeholder='type new number'
            value={this.state.newNumber}
            onChange={this.changeHandlerNumber}/>
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