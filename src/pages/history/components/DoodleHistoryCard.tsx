import  {useState} from 'react'
import { Tldraw,createTLStore, defaultShapeUtils } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import {Box, Grid, Typography} from '@mui/material';
import { DoodleDocument } from '@/bl/doodle/types';
import { DEFAULT_STORE } from '@/bl/doodle/default_store'

const DoodleHistoryCard = ({doc}:{doc:DoodleDocument}) => {
    const [store] = useState(() => {
		const store = createTLStore({
			shapeUtils: defaultShapeUtils,
            initialData: doc.serializedStore
		})
    
		// store.loadSnapshot(DEFAULT_STORE)
		return store
	})
  return (
    <Box 
        sx={{
            height: { xs: 400, lg: 475 },
            margin: { xs: 2.5, md: 3 },
            '& > *': {
                flexGrow: 1,
                flexBasis: '50%'
            }
        }}
    >
        <Grid container wrap='nowrap' >
            <Grid item> 

                <Typography variant="body2">
                    {doc.documentName}
                </Typography>
             </Grid>
            <Grid item xs={5} >
          <Box sx={{
            width: "300px",
            height: "200px"
          }}>
            <div className="tldraw__editor">
			
			<Tldraw autoFocus store={store}  />
		</div>

          </Box>

            </Grid>

        </Grid>

    </Box>
  )
}

export default DoodleHistoryCard