import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate } from 'react-router-dom';
import Loader from '../components/shared/Loader';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className='min-h-screen justify-center items-center '>
                <Loader />
            </div>
        )
    }

    if (user) {
        return children
    } else {
        return (
            <Navigate to="/login" replace />
        )
    }


}

export default PrivateRoute
