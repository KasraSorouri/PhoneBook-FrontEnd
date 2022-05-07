import React , { useState } from 'react';

const AddNew = (props) => {
  const persons=props.persons
  const [tname, newName] = useState('');
  const [tphone, newPhone] = useState('');
//  console.log('props: ' , props)
 // console.log(persons)
/*
  const newPerson={
    name:'',
    phone:''
  }
  
  const changeHandler=(event)=>{
    this.setState({newPerson:event.target.value})
  }
  const changeHandlerNumber=(event)=>{
    this.setState({newNumber:event.target.value})
  }
*/

  const addPerson=(event)=>{
    console.log('addperson log:','tname :', tname)
    event.preventDefault()
    const existPersons=persons.map(person=>(person.name))
    if (existPersons.includes(tname)){
      alert('This person already exist in directory !')
    } else {
      const personOpject = {
        name:tname,
        number:tphone
      }
      newName('')
      newPhone('')
      props.addRecord(personOpject)
    }
  }

  return (
    <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={event=>addPerson(event)}>
          <div>
            nimi: <input 
                  placeholder='type new name'
                  onChange={(event)=>newName(event.target.value)}
                  value={tname}
                  />
          </div>
          <div>
            numero: <input 
            placeholder='type new number'
            onChange={(event)=>newPhone(event.target.value)}
            value={tphone}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
    </div>
  )
}

export default AddNew