import React from 'react';
import {Tldraw} from '@tldraw/tldraw';
import '@tldraw/tldraw/tldraw.css';

const TLCavna: React.FC = () => <div style={{position: 'fixed', inset: 0}}>
	<Tldraw />
</div>;

export default TLCavna;
// TODO: tlDraw-yjs props {autofocus, store, shareZone}

/*
TODO: track, useEditor,

*/
