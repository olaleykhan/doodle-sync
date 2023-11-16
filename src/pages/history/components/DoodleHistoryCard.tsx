import  {useState, FC} from 'react'
import { Tldraw,createTLStore, defaultShapeUtils, Editor, TLRecord } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import {Box, Grid, Typography, Card, Stack} from '@mui/material';
import { DoodleDocument } from '@/bl/doodle/types';
import { DEFAULT_STORE } from '@/bl/doodle/default_store'

type Props = {doc:DoodleDocument, onClick: React.Dispatch<React.SetStateAction<DoodleDocument | undefined>>}
const DoodleHistoryCard:FC<Props> = ({doc, onClick}) => {
    const [store] = useState(() => {
		const store = createTLStore({
			shapeUtils: defaultShapeUtils,
            initialData: doc.serializedStore
		})
    
		// store.loadSnapshot(DEFAULT_STORE)   
		return store
	})
  const [Prev, setImage] = useState<SVGSVGElement | undefined>()

  const handleMount = async (editor:Editor) => {
    const svg = await editor.getSvg(editor.selectedShapes); 
    console.log(svg, "SVG")
    setImage(svg);    
  }

  console.log(Prev, "prev")

  return (

 
       <Card onClick={() => onClick(doc)}  sx={{ 
        p: 2,
        m:4,
        cursor: 'pointer',
        borderRadius: 2,
        position: 'relative',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
           

        }
        }} elevation={2} >
       <Grid container wrap='nowrap' >
            <Grid item xs={4}> 

               <Stack>
               <Typography variant="body1">
                    Doddle Name: {doc.documentName}
                </Typography>
               </Stack>
               <Stack>
               <Typography variant="body1">
                    Created at : {doc.createdAt.toDate().toDateString()}
                </Typography>
               </Stack>
               <Stack>
               <Typography variant="body1">
                    {doc.documentName}
                </Typography>
               </Stack>
             </Grid>
            <Grid item xs={5} >
          <Box sx={{
            width: "300px",
            height: "200px"
          }}>
            
			
			
      <p> hello</p> herre goes dooodle image preview
		

          </Box>

            </Grid>

        </Grid>
       </Card>
  )
}

export default DoodleHistoryCard