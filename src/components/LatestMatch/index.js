import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = details

  return (
    <div className="team-matches">
      <p className="latest-match-heading">Latest Matches</p>
      <div className="latest-matches-container">
        <div className="container-left-part">
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="latest-match-heading">{venue}</p>
          <p className="latest-match-heading">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
        <div className="container-right-part">
          <p className="date">First Innings</p>
          <p className="latest-match-heading">{firstInnings}</p>
          <p className="date">Second Innings</p>
          <p className="latest-match-heading">{secondInnings}</p>
          <p className="date">Man Of The Match</p>
          <p className="latest-match-heading">{manOfTheMatch}</p>
          <p className="date">Umpires</p>
          <p className="latest-match-heading">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
