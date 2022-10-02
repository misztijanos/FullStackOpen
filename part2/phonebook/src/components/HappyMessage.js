const HappyMessage = ({ message }) => {
  const happyStyles = {
    border: '2px solid green',
    background: 'gainsboro',
    color: 'green',
    font_weight: 'bold',
    padding: '10px',
    margin: '0 0 20px 0',
  }
  return message ? <div style={happyStyles}>{message}</div> : <></>
}
export default HappyMessage
