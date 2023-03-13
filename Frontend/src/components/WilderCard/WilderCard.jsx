import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import profil from '../../assets/user.png'
import api from '../../services/api'
import './WilderCard.css'

const WilderCard = ({ user }) => {
  const [deleteWilder, setDeleteWilder] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    api.get('delete/:id').then((response) => {
      setDeleteWilder(response.data)
    })
  }, [])
  const handleDelete = (id) => {
    api.delete(`/wilder/delete/${id}`)
  }
  const handleUpdate = (id) => {
    //     api.get(`wilder/find/${id}`).then((response) => {
    //   setUpdateWilder(response.data)
    // })
    navigate(`/wilder/${id}`)
  }

  return (
    <div className="wilder_conainer">
      {user.map((event) => (
        <div className="wilder">
          <img className="img_profil" src={profil} alt="profil" />
          <p>Nom : {event.first_name}</p>
          <p>Prénom : {event.last_name}</p>
          <ul>
            {event.note.map((n) => (
            <li key={n.id}>{n.language.label}: {n.note}</li>
            ))}
          </ul>
          <div className="container_btn">
            <button onClick={() =>handleUpdate(event.id)} className="btn_wilder">Voir profil</button>
            <button onClick={() =>handleDelete(event.id)} className="btn_wilder">Supprimer</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WilderCard
