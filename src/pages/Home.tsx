import {useState} from 'react'
import { UserAuthData, UserProfile } from '@/bl/users';
import { useAuth } from '@/contexts/AuthContext'
import { createUser } from '@/services/firebase/userServices';
import { Box, Button, OutlinedInput, Typography } from '@mui/material';


const Home = () => {
  const { userCredential} =  useAuth();
  const [userData, setUserData] = useState<UserProfile|null>(null);
  const  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData, "USER DATA !!!")
    // const res = await createUser(userData!);

    // console.log(res, "res fr4om create user")
  }
  
  return (
    <Box>
      <h1> Home page</h1>
      <Box component="form" onSubmit={handleSubmit} > 

<OutlinedInput name="userName" placeholder='User Name' onChange={(e) => setUserData({...userData, username: e.target.value})}/>

<Button type="submit"> Add User</Button>
</Box>
<br/>
      <Typography>{userCredential?.email}</Typography>
      <Typography>{userCredential?.displayName} "Name should be here"</Typography>
      {/* <Typography>{userData?.username}</Typography> */}
      {/* <Typography>{userCredential?.id}</Typography> */}
      <img src={userCredential?.photoURL??""} alt="avatar" height="50px" />

 

    </Box>
  )
}

export default Home