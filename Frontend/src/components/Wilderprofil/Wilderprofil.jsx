import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import profil from '../../assets/user.png'
import api from '../../services/api'

const Wilderprofil = () => {
  const [getWilderId, setGetWilderId] = useState({})
  const [updateWilder, setUpdateWilder] = useState(true)
  const { id } = useParams()
  const navigate = useNavigate()
  const [input, setInput] = useState({
    first_name: '',
    last_name: '',
  })
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    api.get(`wilder/find/${id}`).then((response) => {
      setGetWilderId(response.data)
    })
  }, [])

  const handleUpdate = () => {
    setUpdateWilder(!updateWilder)
  }

  const handleUpdateWilder = () => {
    api
      .patch(`wilder/update/${id}`, input)
      .then((res) => {
        if (res.status === 200) {
          navigate('/wilder')
        }
      })
      .catch((err) => err.response)
  }
  const handleNon = () => {
    setUpdateWilder(!updateWilder)
    }
    const back = () => {
        navigate('/wilder')
    }

  return (
    <div>
      <div className="wilder_conainer">
        {updateWilder === true ? (
          <div className="wilder">
            <img className="img_profil" src={profil} alt="profil" />
            <p>Nom : {getWilderId.first_name}</p>
            <p>Prénom : {getWilderId.last_name}</p>
            <div className="container_btn">
              <button onClick={handleUpdate} className="btn_wilder">
                Modifier profil
              </button>
              <button onClick={back} className="btn_wilder">Retour</button>
            </div>
          </div>
        ) : (
          <div className="wilder">
            <img className="img_profil" src={profil} alt="profil" />
            <label htmlFor="first_name">Nom :</label>
            <input
              placeholder={updateWilder.first_name}
              onChange={handleChange}
              name="first_name"
              type="text"
              value={input.first_name}
              id="first_name"
            />
            <label htmlFor="last_name">Prénom :</label>
            <input
              placeholder={updateWilder.last_name}
              onChange={handleChange}
              name="last_name"
              type="text"
              value={input.last_name}
              id="last_name"
            />
            <div className="container_btn">
              <button onClick={handleUpdateWilder} className="btn_wilder">
                Oui
              </button>
              <button onClick={handleNon} className="btn_wilder">Non</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Wilderprofil
