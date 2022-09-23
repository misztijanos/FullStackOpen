import SingleCountry from './SingleCountry'
import CountryListItem from './CountryListItem'

const Results = ({ countries }) => {
  if (countries.length === 0) {
    return <div>There are no matches.</div>
  } else if (countries.length === 1) {
    return <SingleCountry country={countries[0]} />
  } else if (countries.length <= 10) {
    return (
      <div>
        {countries.map((country) => (
          <CountryListItem key={country.name.common} country={country} />
        ))}
      </div>
    )
  } else {
    return <div>Too many matches.</div>
  }
}

export default Results
