export const DEFAULT_STORE = {
	store: {
		'document:document': {
			gridSize: 10,
			name: '',
			meta: {},
			id: 'document:document',
			typeName: 'document',
		},
		'pointer:pointer': {
			id: 'pointer:pointer',
			typeName: 'pointer',
			x: 530.703125,
			y: 647.30859375,
			lastActivityTimestamp: 1696321778989,
			meta: {},
		},
		'page:page': {
			meta: {},
			id: 'page:page',
			name: 'Page 1',
			index: 'a1',
			typeName: 'page',
		},
		'camera:page:page': {
			x: 0,
			y: 0,
			z: 1,
			meta: {},
			id: 'camera:page:page',
			typeName: 'camera',
		},
		'instance_page_state:page:page': {
			editingShapeId: null,
			croppingShapeId: null,
			selectedShapeIds: [],
			hoveredShapeId: null,
			erasingShapeIds: [],
			hintingShapeIds: [],
			focusedGroupId: null,
			meta: {},
			id: 'instance_page_state:page:page',
			pageId: 'page:page',
			typeName: 'instance_page_state',
		},
		'instance:instance': {
			followingUserId: null,
			opacityForNextShape: 1,
			stylesForNextShape: {},
			brush: null,
			scribble: null,
			cursor: {
				type: 'default',
				rotation: 0,
			},
			isFocusMode: false,
			exportBackground: true,
			isDebugMode: false,
			isToolLocked: false,
			screenBounds: {
				x: 0,
				y: 0,
				w: 1800,
				h: 670,
			},
			zoomBrush: null,
			isGridMode: false,
			isPenMode: false,
			chatMessage: '',
			isChatting: false,
			highlightedUserIds: [],
			canMoveCamera: true,
			isFocused: false,
			devicePixelRatio: 2,
			isCoarsePointer: false,
			openMenus: [],
			isChangingStyle: false,
			isReadonly: false,
			meta: {},
			id: 'instance:instance',
			currentPageId: 'page:page',
			typeName: 'instance',
		},
	},
	schema: {
		schemaVersion: 1,
		storeVersion: 4,
		recordVersions: {
			asset: {
				version: 1,
				subTypeKey: 'type',
				subTypeVersions: {
					image: 2,
					video: 2,
					bookmark: 0,
				},
			},
			camera: {
				version: 1,
			},
			document: {
				version: 2,
			},
			instance: {
				version: 20,
			},
			instance_page_state: {
				version: 4,
			},
			page: {
				version: 1,
			},
			shape: {
				version: 3,
				subTypeKey: 'type',
				subTypeVersions: {
					group: 0,
					text: 1,
					bookmark: 1,
					draw: 1,
					geo: 7,
					note: 4,
					line: 1,
					frame: 0,
					arrow: 1,
					highlight: 0,
					embed: 4,
					image: 2,
					video: 1,
				},
			},
			instance_presence: {
				version: 5,
			},
			pointer: {
				version: 1,
			},
		},
	},
}
