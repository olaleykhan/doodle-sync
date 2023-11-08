// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Button, Stack } from '@mui/material';

// project import
import { useAuth } from '@/contexts/AuthContext';

import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';


const FirebaseSocial = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const {  firebaseGoogleSignIn, firebaseGithubSignIn, firebaseTwitterSignIn } = useAuth();
  const googleHandler = async () => {
    try {
      const userCred = await firebaseGoogleSignIn();
    } catch (err) {
      console.error(err);
    }
  };

  const GithubHandler = async () => {
    try {
      await firebaseGithubSignIn();
    } catch (err) {
      console.error(err);
    }
  };

  const twitterHandler = async () => {
    try {
      await firebaseTwitterSignIn();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Stack
      direction="row"
      spacing={matchDownSM ? 1 : 2}
      justifyContent={matchDownSM ? 'space-around' : 'space-between'}
      sx={{ '& .MuiButton-startIcon': { mr: matchDownSM ? 0 : 1, ml: matchDownSM ? 0 : -0.5 } }}
    >
      <Button
        variant="outlined"
        color="secondary"
        fullWidth={!matchDownSM}
        startIcon={<GoogleIcon/>}
        onClick={googleHandler}
      >
        {!matchDownSM && 'Google'}
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        fullWidth={!matchDownSM}
        startIcon={<GitHubIcon/>}
        onClick={GithubHandler}
      >
        {!matchDownSM && 'Github'}
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        fullWidth={!matchDownSM}
        startIcon={<TwitterIcon/>}
        onClick={twitterHandler}
      >
        {!matchDownSM && 'Twitter'}
      </Button>
    </Stack>
  );
};

export default FirebaseSocial;
