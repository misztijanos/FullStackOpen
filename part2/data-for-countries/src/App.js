import axios from 'axios'
import { useEffect, useState } from 'react'

import Results from './components/Results'

const App = () => {
  const [find, setFind] = useState('')
  const [countries, setCountries] = useState([])
  const [matchingCountries, setMatchingCountries] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data)
    })
  }, [])

  useEffect(() => {
    const newMatchingCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(find)
    )
    setMatchingCountries(newMatchingCountries)
  }, [find, countries])

  return (
    <div>
      <div>
        find countries{' '}
        <input
          value={find}
          onChange={(event) => setFind(event.target.value.toLocaleLowerCase())}
        />
        <Results countries={matchingCountries} />
      </div>
    </div>
  )
}

export default App
