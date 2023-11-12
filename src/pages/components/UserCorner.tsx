import { useAuth } from '@/contexts/AuthContext'
import { track, useEditor } from '@tldraw/tldraw'

const UserCorner = track(() => {
    const editor = useEditor()

	const { color} = editor.user
	const {user} = useAuth()

	return (
		<div style={{ pointerEvents: 'all', display: 'flex' }}>
			<input
				type="color"
				value={color}
				onChange={(e) => {
					editor.user.updateUserPreferences({
						color: e.currentTarget.value,
					})
				}}
			/>
			<input
				value={user?.fullName}
				onChange={(e) => {
					editor.user.updateUserPreferences({
						name: e.currentTarget.value,
					})
				}}
			/>
		</div>
	)
})

export default UserCorner;
