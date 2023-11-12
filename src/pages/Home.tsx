import {useState} from 'react'
import { UserProfile } from '@/bl/users';
import { useAuth } from '@/contexts/AuthContext'
import { Box, Button, OutlinedInput, Typography } from '@mui/material';


const Home = () => {
  const { user} =  useAuth();
  const [userData, setUserData] = useState<UserProfile|null>(null);
  const  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  
  return (
    <Box>
      <h1> Home page</h1>
      <Box component="form" onSubmit={handleSubmit} > 

<OutlinedInput name="userName" placeholder='User Name' onChange={(e) => setUserData({...userData, username: e.target.value})}/>

<Button type="submit"> Add User</Button>
</Box>
<br/>
      <Typography>email: {user?.email}</Typography>
      <Typography> full name: {user?.displayName} "Name should be here"</Typography>
      <Typography> username: {user?.username}</Typography>
      <Typography> id: {user?.id}</Typography>
      <img src={user?.photoURL??""} alt="avatar" height="50px" />

 

    </Box>
  )
}

export default Home