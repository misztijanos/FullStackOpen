import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({ text, value, percentage }) => (
  <tr>
    <td>{text}</td>
    <td>{value.toFixed(2)}</td>
    <td>{percentage && '%'}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />

          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + bad + neutral} />
          <StatisticLine
            text="average"
            value={(good - bad) / (good + bad + neutral)}
          />
          <StatisticLine
            text="positive"
            value={(good * 100) / (good + bad + neutral)}
            percentage="yes"
          />
        </tbody>
      </table>
    )
  } else {
    return <p>No feedback given</p>
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <h2>statistics</h2>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
