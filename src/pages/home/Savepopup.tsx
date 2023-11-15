import {useState} from 'react'
import { Box, Modal, IconButton, Typography, Stack, Button, InputBase, Card, CardContent } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import Input from '@/components/base/Input';
import { LoadingScreen } from '@tldraw/tldraw';

const Savepopup = ({open, setOpen, handleSaveDocument, loading}:{
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    handleSaveDocument: (docName: string) => void
    loading: boolean
}) => {
    const [documentName, setDocumentName] =useState<string>('');
    const handleSubmit = () => {
        console.log("is it workingn")
        handleSaveDocument(documentName);
    }

  return (
            <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  height:'100%', width: '100%' }}
      >
       {
        loading ? <LoadingScreen >
            <Card raised sx={{ p: 4 }}>
                <CardContent>
                    <Typography variant="body1">
                    Saving doodle. S'il vous plaît, attendez...
                    </Typography>
                </CardContent>
            </Card>
        </LoadingScreen> :   <Box my="auto" sx={{
            width: 500,
            bgcolor: 'background.paper',
            borderRadius: 2,
            p: 4,
            position: 'relative',
         }}>
        <Box sx={{
            position: 'absolute',
            top: 4,
            right: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'all',
            borderRadius: '50%',
            fontWeight: 'bold',

        }} component="form" onSubmit={handleSubmit} >
        <IconButton onClick={() => setOpen(false)}   >
            <CloseIcon fontSize='large' fontWeight='bolder' />
          </IconButton>
        </Box>
          <Typography
            variant="h3"
            mb={1}
          >
            Save Doodle Online
          </Typography>
          <Box>
          <Stack spacing={2}  >
            <Input name="document-name" type="text" onChange={(e)=>            {
                setDocumentName(e.target.value);
            }} value={documentName} label='Save Name' id="document-name" />
            <Button onClick={handleSubmit} variant="contained"> Save </Button>
        
            </Stack>
          </Box>
        </Box>
       }
      </Modal>
  )
}

export default Savepopup