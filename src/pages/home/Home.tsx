import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import { useYjsStore, useRoomId } from '../../hooks'
import { YJS_SOCKET_URL } from '../../services/api/constants'

import UserCorner from '../components/UserCorner'
import Controls from './Controls'

export default function Home() {
    // const {status, value: roomId} = useRoomId();
	// const store = useYjsStore();

	return (
		<div className="tldraw__editor">
			 <Tldraw autoFocus shareZone={<Controls />}    />
		</div>
	)
}