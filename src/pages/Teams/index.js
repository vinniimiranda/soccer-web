import React, { useState, useEffect } from 'react'
import { API } from '../../services/api'


export default function Teams () {
  const [data, setData] = useState([])
  useEffect(() => {
    API.get('lookup_all_teams.php?id=4351').then(({ data }) => setData(data.teams))
  }, [])
  console.log(data)
  return (

    <div className="grid">
      {data.map(team => (
        <div key={team.idTeam} className="card">
          <img src={team.strTeamBadge} alt={team.strTeam} />
          <span className="name">{team.strTeam}</span>
          <span>{team.strStadium}</span>
        </div>
      ))}
    </div>

  )
}
