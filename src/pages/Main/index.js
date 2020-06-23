import React, { useState, useEffect } from 'react'
import { API } from '../../services/api'
import Nav from '../../components/Nav'

export default function Launches ({ history }) {
  const [data, setData] = useState([])
  useEffect(() => {
    API.get('/launches').then(({ data }) => setData(data))

  }, [])
  return (
    <div className="container">
      <Nav history={history} />
      <div className="grid">
        {data.map(l => (
          <div key={l.id} className="card">
            <img src={l.links.patch.small} alt={l.name} />
            <span className="name">{l.name}</span>

          </div>
        ))}
      </div>
    </div>
  )
}
