import { useAuth } from '@/contexts/AuthContext'
import AuthGuard from '@/router/AuthGuard'
import { Button } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Screen = () => {
    const {logout} = useAuth()


  return (
   <AuthGuard>
    <>
    <Button color='primary' onClick={logout} > logout </Button>
    <Outlet/>
    </>
   </AuthGuard>
  )
}

export default Screen