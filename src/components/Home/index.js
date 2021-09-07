import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {matchesList: [], isLoading: true}

  componentDidMount() {
    this.getAndSetMatchesList()
  }

  getAndSetMatchesList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const formattedData = teams.map(eachMatch => ({
      name: eachMatch.name,
      id: eachMatch.id,
      teamImageUrl: eachMatch.team_image_url,
    }))
    this.setState({isLoading: false, matchesList: formattedData})
  }

  renderLoading = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading, matchesList} = this.state
    return (
      <div className="app-container">
        <div className="heading-container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="app-heading">IPL Dashboard</h1>
        </div>

        {isLoading ? (
          this.renderLoading()
        ) : (
          <ul className="team-card-container-items-list">
            {matchesList.map(eachTeam => (
              <TeamCard key={eachTeam.id} eachTeam={eachTeam} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
