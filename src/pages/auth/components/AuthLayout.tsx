import { Grid, Stack, Typography, Button } from '@mui/material';
import AuthWrapper from './AuthWrapper';


type  PageInfoType = {
  key: 'login'|'signup',
  title: string,
  cta: string,
}

const pageInfo:PageInfoType[] = [
  {
    key: 'login',
    title: "Sign in",
    cta: "Don't have an account? Sign up"
  },
  {
    key: 'signup',
    title: "Create an account",
    cta: "Already have an account? Sign in"
  }
]

type Props = {
    children: React.ReactNode;
    setPage: React.Dispatch<React.SetStateAction<'login'|'signup'>>
    page: string
}

const AuthLayout:React.FC<Props> = ({children, page, setPage}) => {
  const pageDetails = pageInfo.find((item) => item.key === page);

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h4"> {pageDetails?.title}</Typography>
            <Typography
              component={Button}
              onClick={() => setPage((prev) => prev === 'login' ? 'signup' : 'login')}
              
              variant="body1"
              sx={{ textDecoration: 'none', textTransform: 'capitalize' }}
              color="primary"
            >
             {pageDetails?.cta}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
         {children}
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default AuthLayout;
