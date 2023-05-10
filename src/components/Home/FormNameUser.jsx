import React, { useRef } from 'react'
import { setTrainerName } from '../../store/slices/trainerName.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './styles/formNameUser.css';


const FormNameUser = () => {


  const inputName = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerName(inputName.current.value.trim()))
    navigate('pokedex')
  }


  //!
  return (
    <form className="form-name__user" onSubmit={handleSubmit}>
      <input className="form-name__user-input" ref={inputName} type="text" placeholder='Nombre' />
      <button className="form-name__user-button">Comenzar</button>
    </form>
  )

}

export default FormNameUser