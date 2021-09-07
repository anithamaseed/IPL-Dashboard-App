import './index.css'

const MatchCard = props => {
  const {eachMatchInfo} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = eachMatchInfo
  let classNameMatchStatus = 'red'
  if (matchStatus === 'Won') {
    classNameMatchStatus = 'green'
  }

  return (
    <li className="team-matches-recent">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo-recent"
      />
      <p className="recent-competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={classNameMatchStatus}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
