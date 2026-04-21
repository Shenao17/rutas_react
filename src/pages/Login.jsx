import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // Si venía de una ruta protegida, redirigir de vuelta allá
  const from = location.state?.from?.pathname || '/'

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email)
    navigate(from, { replace: true })
  }

  return (
    <div className="w3-container w3-content" style={{ maxWidth: '500px', marginTop: '100px' }}>
      <div className="w3-card-4 w3-round-xlarge w3-white">
        <div className="w3-container w3-theme-d2 w3-round-xlarge w3-padding-16">
          <h2 className="w3-center">Iniciar sesión</h2>
        </div>
        <form className="w3-container w3-padding-24" onSubmit={handleSubmit}>
          <div className="w3-section">
            <label><i className="fa fa-envelope"></i> Correo electrónico</label>
            <input
              className="w3-input w3-border w3-round"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="w3-section">
            <label><i className="fa fa-lock"></i> Contraseña</label>
            <input
              className="w3-input w3-border w3-round"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="w3-section">
            <button type="submit" className="w3-button w3-theme-d2 w3-round w3-block w3-section">
              <i className="fa fa-sign-in"></i> Acceder
            </button>
          </div>
          <p className="w3-center"><a href="#">¿Olvidaste tu contraseña?</a></p>
          <p className="w3-center">¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>.</p>
        </form>
      </div>
      <br />
      <footer className="w3-container w3-theme-d3 w3-padding-16">
        <h5>RedSocial © 2025</h5>
      </footer>
    </div>
  )
}
