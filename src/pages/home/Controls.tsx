import React from 'react'
import { Box, Grid, IconButton as Button } from '@mui/material'
import HistoryIcon from '@mui/icons-material/History';
import GroupsIcon from '@mui/icons-material/Groups';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Controls = () => {
  return (
    <Box mb={4}  sx={{
        width:'100%',
        maxWidth:'16.4rem',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        pointerEvents:'all',
        
    }}>
        <Grid container columnSpacing={1} wrap='nowrap' >
            {/* <Grid item  xs="auto" >
            <Button color="primary" title="show history" ><HistoryIcon/></Button>
            </Grid>
            <Grid item xs="auto" > 
            <Button color="primary" title="save online" > <CloudUploadIcon/></Button>
            </Grid> */}
            <Grid item xs="auto" > 
            <Button color="primary" title="show history" size='large' > <HistoryIcon fontSize="large" /></Button>
            </Grid>
            <Grid item xs="auto" > 
            <Button color="primary" title="save online" size='large' > <CloudUploadIcon fontSize="large" /></Button>
            </Grid>
            <Grid item xs="auto" > 
            <Button color="primary" title="create room" size='large' > <GroupsIcon fontSize="large" /></Button>
            </Grid>
        </Grid>
       
    </Box>
  )
}

export default Controls