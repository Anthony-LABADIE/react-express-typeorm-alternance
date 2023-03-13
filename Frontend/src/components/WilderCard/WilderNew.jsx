import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import profil from '../../assets/user.png'
import api from '../../services/api'

const WilderNew = () => {
  const navigate = useNavigate()
  const [inputNew, setInputNew] = useState({
    first_name: '',
    last_name: '',
    email: '',
    about: '',
  })
  const handleChange = (e) => {
    setInputNew({ ...inputNew, [e.target.name]: e.target.value })
  }

  const handleNewWilder = () => {
    api
      .post(`wilder/create`, inputNew)
      .then((res) => {
        if (res.status === 200) {
          navigate('/wilder')
        }
      })
      .catch((err) => err.response)
  }
  const back = () => {
    navigate('/wilder')
  }
  console.log(inputNew)

  return (
    <div>
      <div className="wilder_conainer">
        <div className="wilder">
          <img className="img_profil" src={profil} alt="profil" />
          <label htmlFor="first_name">Nom :</label>
          <input
            placeholder="Nom"
            onChange={handleChange}
            name="first_name"
            type="text"
            value={inputNew.first_name}
            id="first_name"
          />
          <label htmlFor="last_name">Prénom :</label>
          <input
            placeholder="Prénom"
            onChange={handleChange}
            name="last_name"
            type="text"
            value={inputNew.last_name}
            id="last_name"
          />
          <label htmlFor="Email">Email :</label>
          <input
            placeholder="Email"
            onChange={handleChange}
            name="email"
            type="text"
            value={inputNew.email}
            id="Email"
          />
          <label htmlFor="about">A propos :</label>
          <input
            placeholder="A propos"
            onChange={handleChange}
            name="about"
            type="text"
            value={inputNew.about}
            id="about"
          />
          <div className="container_btn">
            <button onClick={handleNewWilder} className="btn_wilder">
              Oui
            </button>
            <button onClick={back} className="btn_wilder">
              Retour
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WilderNew
