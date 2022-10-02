const DisplayPersons = ({ persons, filter, handleDelete }) => (
  <>
    {persons
      .filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
      .map((person) => (
        <p key={person.id}>
          {person.name} {person.number}{' '}
          <button onClick={() => handleDelete(person.id)}>delete</button>
        </p>
      ))}
  </>
)
export default DisplayPersons
