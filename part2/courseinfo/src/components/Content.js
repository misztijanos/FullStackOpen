import Part from './Part'
const Content = (props) => {
  return (
    <div>
      {props.parts.map((item) => (
        <Part key={item.id} part={item} />
      ))}
    </div>
  )
}
export default Content
