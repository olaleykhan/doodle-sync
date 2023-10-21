import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import { useYjsStore, useRoomId } from './../hooks'

import UserCorner from './components/UserCorner'

const HOST_URL =
	import.meta.env.MODE === 'development'
		? 'ws://localhost:1234'
		: 'wss://demos.yjs.dev'

export default function Home() {
    const {status, value: roomId} = useRoomId();
	const store = useYjsStore({
		roomId: roomId,
		hostUrl: HOST_URL,
	})

	return (
		<div className="tldraw__editor">
			{status !== 'loaded' ? "loading lati aro": <Tldraw autoFocus store={store} shareZone={<UserCorner />} />}
		</div>
	)
}


