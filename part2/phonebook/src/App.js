// app uses a db, so don't forget 'npm run server'

import { useEffect, useState } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import DisplayPersons from './components/DisplayPersons'
import HappyMessage from './components/HappyMessage'
import ErrorMessage from './components/ErrorMessage'

import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [happyMessage, setHappyMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    personsService.getAll().then((personsFromDb) => setPersons(personsFromDb))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    //check for duplicate
    const personToChange = persons.find((p) => p.name === newName)
    if (
      personToChange &&
      window.confirm(`Change ${personToChange.name}'s number?`)
    ) {
      // update the number in db, and update state accordingly
      personsService
        .update(personToChange.id, { ...personToChange, number: newNumber })
        .then((personFromDb) => {
          const newPersons = persons.map((p) =>
            p.id === personFromDb.id ? personFromDb : p
          )
          setPersons(newPersons)
          setHappyMessage(`Updated ${personFromDb.name}'s number.`)
          setTimeout(() => setHappyMessage(''), 5000)
        })
        .catch((error) => {
          setErrorMessage(
            `Information of ${personToChange.name} has already been removed from the server`
          )
          setTimeout(() => setErrorMessage(''), 5000)
          const newPersons = persons.filter((e) => e.id !== personToChange.id)
          setPersons(newPersons)
        })
    } else if (newName && newNumber) {
      //add the new entry to the db, and then update state accordingly
      personsService
        .create({ name: newName, number: newNumber })
        .then((personFromDb) => {
          setPersons([...persons, personFromDb])
          setHappyMessage(`Added ${personFromDb.name}.`)
          setTimeout(() => setHappyMessage(''), 5000)
        })
    }

    //reset the input fields
    setNewName('')
    setNewNumber('')
  }

  const handleDelete = (id) => {
    const person = persons.find((e) => e.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService.remove(id).then((response) => setPersons(response))
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} setFilter={setFilter} />

      <h2>Add a new</h2>
      <HappyMessage message={happyMessage} />
      <ErrorMessage message={errorMessage} />
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        handleSubmit={handleSubmit}
      />

      <h2>Numbers</h2>
      <DisplayPersons
        persons={persons}
        filter={filter}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App
