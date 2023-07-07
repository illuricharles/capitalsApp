import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Captials extends Component {
  state = {
    activeState: countryAndCapitalsList[0].id,
  }

  onChangeItem = event => this.setState({activeState: event.target.value})

  getCountry = () => {
    const {activeState} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeState,
    )
    return activeCountryAndCapital
  }

  render() {
    const {activeState} = this.state
    const {country} = this.getCountry()

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="card-contents">
            <form>
              <select
                name="language"
                id="countries"
                className="countries-item"
                onChange={this.onChangeItem}
                value={activeState}
              >
                {countryAndCapitalsList.map(eachList => (
                  <option
                    key={eachList.id}
                    value={eachList.id}
                    className="countries-item"
                  >
                    {eachList.capitalDisplayText}
                  </option>
                ))}
              </select>
            </form>
            <p className="question">is capital of which country?</p>
          </div>
          <h1 className="answer">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Captials
