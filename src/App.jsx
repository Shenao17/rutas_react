import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar'

// Páginas
import Inicio from './pages/Inicio'
import Login from './pages/Login'
import Registro from './pages/Registro'
import Perfil from './pages/Perfil'
import Chat from './pages/Chat'
import Grupos from './pages/Grupos'
import Configuracion from './pages/Configuracion'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* ── Rutas públicas ── */}
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />

          {/* ── Rutas protegidas ── */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Inicio />
              </PrivateRoute>
            }
          />
          <Route
            path="/perfil"
            element={
              <PrivateRoute>
                <Perfil />
              </PrivateRoute>
            }
          />
          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          />
          <Route
            path="/grupos"
            element={
              <PrivateRoute>
                <Grupos />
              </PrivateRoute>
            }
          />
          <Route
            path="/configuracion"
            element={
              <PrivateRoute>
                <Configuracion />
              </PrivateRoute>
            }
          />

          {/* Ruta 404 → redirige al inicio */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
