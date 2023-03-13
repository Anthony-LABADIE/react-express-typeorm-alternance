import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import WilderCard from '../components/WilderCard/WilderCard'
import api from '../services/api'

import './Wilder.css'

const Wilder = () => {
  const [user, setUser] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    api.get('wilder/list').then((response) => {
      setUser(response.data)
    })
  }, [])

  const newWilder = () => {
    navigate('/wildernew')
  }

  return (
    <div className="FirstPage">
      <Navbar />
      <h1>wilder</h1>
      <WilderCard user={user} />
      <div>
        <button onClick={newWilder}>Ajouter un Wilder</button>
      </div>
    </div>
  )
}
export default Wilder
