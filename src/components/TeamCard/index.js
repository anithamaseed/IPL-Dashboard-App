import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {name, id, teamImageUrl} = eachTeam

  return (
    <li>
      <Link to={`/team-matches/${id}`} className="item-container">
        <img src={teamImageUrl} className="img-size" alt={name} />
        <p className="team-heading">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
