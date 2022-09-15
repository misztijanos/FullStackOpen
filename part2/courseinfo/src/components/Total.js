const Total = ({ parts }) => (
  <p>
    Total of {parts.reduce((sum, elem) => sum + elem.exercises, 0)} exercises
  </p>
)
export default Total
