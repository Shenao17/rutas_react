import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function PrivateRoute({ children }) {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) {
    // Redirige al login y guarda la ruta a la que intentaba ir
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
