import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import { useYjsStore, useRoomId } from '../hooks'
import { YJS_SOCKET_URL } from '../services/api/constants'

import UserCorner from './components/UserCorner'

export default function Canvas() {
    const {status, value: roomId} = useRoomId();
	const store = useYjsStore({
		roomId: roomId,
		hostUrl: YJS_SOCKET_URL,
	})

	return (
		<div className="tldraw__editor">
			{status !== 'loaded' ? "loading lati aro": <Tldraw autoFocus store={store} shareZone={<UserCorner />} />}
		</div>
	)
}


