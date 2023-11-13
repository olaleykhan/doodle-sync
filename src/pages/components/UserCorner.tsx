import { useAuth } from '@/contexts/AuthContext'
import { Typography, Box } from '@mui/material'
import { track, useEditor } from '@tldraw/tldraw'

const UserCorner = track(() => {
    const editor = useEditor()

	const { color} = editor.user
	const {user} = useAuth()

	return (
		<Box sx={{ pointerEvents: 'all', display: 'flex', my:1 }}>
			<input
				type="color"
				value={color}
				onChange={(e) => {
					editor.user.updateUserPreferences({
						color: e.currentTarget.value,
					})
				}}
			/>

			<Typography variant="caption" sx={{
				px:1,
				ml:1,
				// backgroundColor: color,
				borderRadius: 1,
				border: '2px solid',
				borderColor: color,
			}} >{user?.username}</Typography>
		</Box>
	)
})

export default UserCorner;
