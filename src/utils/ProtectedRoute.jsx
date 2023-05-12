import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...props }) => {
  return (
    !props.loggedIn ? <Navigate to="/" replace /> : <Component {...props} /> 
  )
}

export default ProtectedRoute;