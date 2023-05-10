import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

    const { trainerName } = useSelector(state => state) // console.log(trainerName)



    if (trainerName.length >= 1) {
        return <Outlet />
    } else {
        return <Navigate to='/' />
    }

}

export default ProtectedRoutes