const Input = ({ text, val, setVal }) => (
  <div>
    {`${text}: `}
    <input value={val} onChange={(event) => setVal(event.target.value)} />
  </div>
)
export default Input
