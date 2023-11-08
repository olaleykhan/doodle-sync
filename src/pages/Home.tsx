import { useAuth } from '@/contexts/AuthContext'
import { Box, Typography } from '@mui/material';

const Home = () => {
  const {user} =  useAuth();
  
  return (
    <Box>
      <h1> Home page</h1>
      <Typography>{user?.email}</Typography>
      <Typography>{user?.fullName} "Name should be here"</Typography>
      <Typography>{user?.id}</Typography>
      <img src={user?.avatar} alt="avatar" />
    </Box>
  )
}

export default Home