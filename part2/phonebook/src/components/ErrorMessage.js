const ErrorMessage = ({ message }) => {
  const happyStyles = {
    border: '2px solid red',
    background: 'gainsboro',
    color: 'red',
    font_weight: 'bold',
    padding: '10px',
    margin: '0 0 20px 0',
  }
  return message ? <div style={happyStyles}>{message}</div> : <></>
}
export default ErrorMessage
