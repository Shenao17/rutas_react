import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Registro() {
  const [form, setForm] = useState({ nombre: '', email: '', password: '', fecha: '', genero: '' })
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    login(form.email)
    navigate('/')
  }

  return (
    <div className="w3-container w3-content" style={{ maxWidth: '600px', marginTop: '100px' }}>
      <div className="w3-card-4 w3-round-xlarge w3-white">
        <div className="w3-container w3-theme-d2 w3-round-xlarge w3-padding-16">
          <h2 className="w3-center">Crear cuenta</h2>
        </div>
        <form className="w3-container w3-padding-24" onSubmit={handleSubmit}>
          <div className="w3-section">
            <label><i className="fa fa-user"></i> Nombre completo</label>
            <input className="w3-input w3-border w3-round" type="text" name="nombre" placeholder="Juan Pérez" onChange={handleChange} required />
          </div>
          <div className="w3-section">
            <label><i className="fa fa-envelope"></i> Correo electrónico</label>
            <input className="w3-input w3-border w3-round" type="email" name="email" placeholder="tu@email.com" onChange={handleChange} required />
          </div>
          <div className="w3-section">
            <label><i className="fa fa-lock"></i> Contraseña</label>
            <input className="w3-input w3-border w3-round" type="password" name="password" placeholder="********" onChange={handleChange} required />
          </div>
          <div className="w3-section">
            <label><i className="fa fa-calendar"></i> Fecha de nacimiento</label>
            <input className="w3-input w3-border w3-round" type="date" name="fecha" onChange={handleChange} />
          </div>
          <div className="w3-section">
            <label><i className="fa fa-venus-mars"></i> Género</label>
            <select className="w3-select w3-border w3-round" name="genero" onChange={handleChange}>
              <option value="" disabled defaultValue>Selecciona</option>
              <option>Hombre</option>
              <option>Mujer</option>
              <option>Otro</option>
            </select>
          </div>
          <div className="w3-section">
            <button type="submit" className="w3-button w3-theme-d2 w3-round w3-block w3-section">
              <i className="fa fa-user-plus"></i> Registrarse
            </button>
          </div>
          <p className="w3-center">¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>.</p>
        </form>
      </div>
      <br />
      <footer className="w3-container w3-theme-d3 w3-padding-16">
        <h5>RedSocial © 2025</h5>
      </footer>
    </div>
  )
}
