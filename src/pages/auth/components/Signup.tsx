import { useEffect, useState, SyntheticEvent } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  Link,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material';


import * as Yup from 'yup';
import { Formik } from 'formik';


import {useAuth} from '@/contexts/AuthContext';
import useScriptRef from '../../../hooks/useScriptRef';
import FirebaseSocial from './FirebaseSocial';
import { strengthColor, strengthIndicator } from '@/utils/password-strength';

import { StringColorProps } from '@/bl/password';

import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { SignupData } from '@/bl/users';


const AuthRegister = () => {
  const { firebaseRegister, firebaseUpdateProfile } = useAuth();
  const scriptedRef = useScriptRef();

  const [level, setLevel] = useState<StringColorProps>();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const changePassword = (value: string) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('');
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          displayName: '',
          username: '',
          email: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          displayName: Yup.string().max(255).required('Name is required'),
          username: Yup.string().max(255).required('Username is required'),
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
              const signupData:SignupData ={
                displayName: values.displayName ,
                email: values.email,
                password: values.password,
                username: values.username
              }
            const cred = await firebaseRegister(signupData);
            // await 
          } catch (err: any) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="displayname-signup">Full Name*</InputLabel>
                  <OutlinedInput
                    id="displayname-login"
                    type="displayname"
                    value={values.displayName}
                    name="displayName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="enter full name"
                    fullWidth
                    error={Boolean(touched.displayName && errors.displayName)}
                  />
                </Stack>
                {touched.displayName && errors.displayName && (
                  <FormHelperText error id="helper-text-displayName-signup">
                    {errors.displayName}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="username-signup">username*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.username && errors.username)}
                    id="username-signup"
                    type="username"
                    value={values.username}
                    name="username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="enter username"
                    inputProps={{}}
                  />
                </Stack>
                {touched.username && errors.username && (
                  <FormHelperText error id="helper-text-username-signup">
                    {errors.username}
                  </FormHelperText>
                )}
              </Grid>
           
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="demo@company.com"
                    inputProps={{}}
                  />
                </Stack>
                {touched.email && errors.email && (
                  <FormHelperText error id="helper-text-email-signup">
                    {errors.email}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-signup">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="password-signup"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                      changePassword(e.target.value);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <Button
                          // aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          // edge="end"
                          color="secondary"
                        >
                          {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                        </Button>
                      </InputAdornment>
                    }
                    placeholder="******"
                    inputProps={{}}
                  />
                </Stack>
                {touched.password && errors.password && (
                  <FormHelperText error id="helper-text-password-signup">
                    {errors.password}
                  </FormHelperText>
                )}
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
          
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                {/* <AnimateButton> */}
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    Create Account
                  </Button>
                {/* </AnimateButton> */}
              </Grid>
              <Grid item xs={12}>
                <Divider>
                  <Typography variant="caption">Sign up with</Typography>
                </Divider>
              </Grid>
              <Grid item xs={12}>
                <FirebaseSocial />
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthRegister;
