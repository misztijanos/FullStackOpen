import Input from './Input'

const PersonForm = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <Input text={'name'} val={newName} setVal={setNewName} />
    <Input text={'number'} val={newNumber} setVal={setNewNumber} />

    <div>
      <button type="submit">add</button>
    </div>
  </form>
)
export default PersonForm
