import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
          <button
            className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i className="fa fa-bars"></i>
          </button>

          <Link to="/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
            <i className="fa fa-home w3-margin-right"></i>Logo
          </Link>

          {user ? (
            <>
              <Link to="/perfil" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Perfil">
                <i className="fa fa-user"></i>
              </Link>
              <Link to="/chat" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Mensajes">
                <i className="fa fa-envelope"></i>
              </Link>
              <Link to="/grupos" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Grupos">
                <i className="fa fa-users"></i>
              </Link>

              {/* Notificaciones */}
              <div className="w3-dropdown-hover w3-hide-small">
                <button className="w3-button w3-padding-large">
                  <i className="fa fa-bell"></i>
                  <span className="w3-badge w3-right w3-small w3-green">3</span>
                </button>
                <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{ width: '300px' }}>
                  <a href="#" className="w3-bar-item w3-button">Una nueva solicitud de amistad</a>
                  <a href="#" className="w3-bar-item w3-button">John Doe publicó en tu muro</a>
                  <a href="#" className="w3-bar-item w3-button">Jane le gusta tu publicación</a>
                </div>
              </div>

              <Link to="/configuracion" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="Configuración">
                <i className="fa fa-cog"></i>
              </Link>
              <button onClick={handleLogout} className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="Cerrar sesión">
                <i className="fa fa-sign-out"></i>
              </button>
              <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white">
                <img src={user.avatar} className="w3-circle" style={{ height: '23px', width: '23px' }} alt="Avatar" />
              </a>
            </>
          ) : (
            <>
              <Link to="/login" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">
                <i className="fa fa-sign-in"></i> Iniciar sesión
              </Link>
              <Link to="/registro" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">
                <i className="fa fa-user-plus"></i> Registrarse
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Navbar móvil */}
      <div className={`w3-bar-block w3-theme-d2 w3-hide-large w3-hide-medium w3-large ${mobileOpen ? 'w3-show' : 'w3-hide'}`}>
        <Link to="/" className="w3-bar-item w3-button w3-padding-large" onClick={() => setMobileOpen(false)}>Inicio</Link>
        {user ? (
          <>
            <Link to="/perfil" className="w3-bar-item w3-button w3-padding-large" onClick={() => setMobileOpen(false)}>Perfil</Link>
            <Link to="/chat" className="w3-bar-item w3-button w3-padding-large" onClick={() => setMobileOpen(false)}>Mensajes</Link>
            <Link to="/grupos" className="w3-bar-item w3-button w3-padding-large" onClick={() => setMobileOpen(false)}>Grupos</Link>
            <Link to="/configuracion" className="w3-bar-item w3-button w3-padding-large" onClick={() => setMobileOpen(false)}>Configuración</Link>
            <button onClick={handleLogout} className="w3-bar-item w3-button w3-padding-large">Cerrar sesión</button>
          </>
        ) : (
          <>
            <Link to="/login" className="w3-bar-item w3-button w3-padding-large" onClick={() => setMobileOpen(false)}>Iniciar sesión</Link>
            <Link to="/registro" className="w3-bar-item w3-button w3-padding-large" onClick={() => setMobileOpen(false)}>Registrarse</Link>
          </>
        )}
      </div>
    </>
  )
}
