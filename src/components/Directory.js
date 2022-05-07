import React from 'react';

const Directory = ({persons,removeRecord}) =>{

  const removePerson =(person) =>{
    return ()=>removeRecord(person)
  }

  return(
    <div>
        <h2>Numerot</h2>
        <table><tbody>
        {persons.map(person=>
        <tr key={person.name}>
        <td>{person.name}</td>
        <td>{person.number}</td>
        <td><button onClick={removePerson(person)} >poista</button></td>
        </tr>
        )}
      </tbody></table>
      </div>
    )
  }

export default Directory