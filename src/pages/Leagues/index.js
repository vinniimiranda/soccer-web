import React, { useState, useEffect } from 'react';
import { API } from '../../services/api';

export default function Leagues ({ history }) {
  const leaguesIds = ['4328', '4331', '4332', '4334', '4335', '4351']
  const [leagues, setLeagues] = useState([])

  function fetchData () {
    const calls = leaguesIds.map(id => API.get(`lookupleague.php?id=${id}`))
    Promise.all(calls).then(res => setLeagues(res.map(ld => ld.data.leagues[0])))
  }

  useEffect(() => {
    fetchData()
    //eslint-disable-next-line
  }, [])



  return <div className="grid">
    {leagues.map(league => (
      <div className="card" key={league.strLeague}>
        <img src={league.strBadge} alt={league.strLeague} />
        <span className="name">
          {league?.strLeague}
        </span>
      </div>
    ))}
  </div>

}
