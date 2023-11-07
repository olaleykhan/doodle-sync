import React from 'react';
import {Button, Container, Typography} from '@mui/material';

const Signup: React.FC = () => {
  const handleEmailSignup = () => {
    // Handle email signup logic
  };

  const handleGithubSignup = () => {
    // Handle GitHub signup logic
  };

  const handleGoogleSignup = () => {
    // Handle Google signup logic
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
      maxWidth="xs"
    >
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ margin: 1 }}
        onClick={handleEmailSignup}
      >
        Sign up with Email
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ margin: 1 }}
        onClick={handleGithubSignup}
      >
        Sign up with GitHub
      </Button>
      <Button
        variant="contained"
        color="error"
        sx={{ margin: 1 }}
        onClick={handleGoogleSignup}
      >
        Sign up with Google
      </Button>
    </Container>
  );
};

export default Signup;
