import React from 'react'
import {Link} from 'react-router-dom'
import { Box, Grid, IconButton as Button } from '@mui/material'
import HistoryIcon from '@mui/icons-material/History';
import GroupsIcon from '@mui/icons-material/Groups';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { TLStore, useEditor } from '@tldraw/tldraw';

type Props = {  
  onClickSave: (s:TLStore) => void
  onHistory: () => void
  onStartRoom: (s:TLStore) => void
}
const Controls:React.FC<Props> = ({onClickSave, onHistory, onStartRoom}) => {
  const editor = useEditor();

	function handleCreateRoom() {
    onStartRoom(editor.store)
		// console.log(editor.currentPageShapes, "current page shapes");
		// console.log(editor.store, "editor");
		// editor.store.clear();
	}


  // console.log(Object.size(editor.store),"THE Store", editor.store)
  return (
    <Box   sx={{
        width:'100%',
        maxWidth:'16.4rem',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        pointerEvents:'all',
        height: 60
        
    }}>
        <Grid container columnSpacing={1} wrap='nowrap' >
            {/* <Grid item  xs="auto" >
            <Button color="primary" title="show history" ><HistoryIcon/></Button>
            </Grid>
            <Grid item xs="auto" > 
            <Button color="primary" title="save online" > <CloudUploadIcon/></Button>
            </Grid> */}
            <Grid item xs="auto" > 
            <Button onClick={onHistory} color="primary" title="show history" size='large' component={Link} to="/history" > <HistoryIcon fontSize="large" /></Button>
            </Grid>
            <Grid item xs="auto" > 
            <Button onClick={()=>onClickSave(editor.store)}  color="primary" title="save online" size='large' > <CloudUploadIcon fontSize="large" /></Button>
            </Grid>
            <Grid item xs="auto" > 
            <Button onClick={handleCreateRoom} color="primary" title="create room" size='large' > <GroupsIcon fontSize="large" /></Button>
            </Grid>
        </Grid>
       
    </Box>
  )
}

export default Controls