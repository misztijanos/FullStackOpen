import { useState } from 'react'
import SingleCountry from './SingleCountry'

const CountryListItem = ({ country }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <p>
        {country.name.common}{' '}
        <button onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>
      </p>
      {show && <SingleCountry country={country} />}
    </>
  )
}
export default CountryListItem
