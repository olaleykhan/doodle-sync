import { IconButton, Box } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Back = ({handleBack}:{
    handleBack: () => void
}) => {
  return (
    <Box sx={{
        position: 'fixed',
        top: 0,
        height: 60,
        right: 30,
    }} >
        <IconButton onClick={handleBack} >
    <ArrowBackIcon />
    </IconButton>
    </Box>
  )
}

export default Back