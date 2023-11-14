import {createTheme, type Theme} from '@mui/material/styles';

export const theme: Theme = createTheme({
	spacing: (factor: number) => `${factor * 0.8}rem`,
	palette: {
		primary: {
			main: '#639a30',
			contrastText: '#fff',
			light: '#F2FBFA',
			dark: '#00B797',
		},
		success: {
			main: '#00B797',
		},
		grey: {
			// Disable eslint @typescript-eslint/naming-convention
			// eslint-disable-next-line @typescript-eslint/naming-convention
			100: '#ACACAC',
		},
		text: {
			secondary: '#888888',
			primary: '#333333',
			disabled: '#d9d9d9',
		},
		divider: '#DDDDDD',
		background: {
			paper: '#E8E8EA',
			default: '#fff',
		},
	},
	typography: {
		fontFamily: 'roboto, sans-serif',
		button: {
			textTransform: 'none',
		}
	},
	components: {
		// eslint-disable-next-line @typescript-eslint/naming-convention
		MuiTypography: {
			styleOverrides: {
				root: {
					fontFamily: 'roboto, sans-serif',
				},
				h4: {
					fontSize: '2.2rem',
					fontWeight: 700,
					lineHeight: '2.4rem',
				},
				subtitle1: {
					fontSize: '1.8rem',
					fontWeight: 400,
					lineHeight: '2.2rem',
				},
				body1: {
					color: '#000000',
					fontSize: '1.6rem',
					fontWeight: 400,
					lineHeight: 'normal ',
				},
				caption: {
					fontSize: '1.6rem',
					fontWeight: 400,
					lineHeight: 'normal ',
					color: '#999999',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					cursor: 'pointer !important',
					'&:hover': {
						boxShadow: 'none',
						blurRadius: 0,
				}
			}
		}
	},
		// eslint-disable-next-line @typescript-eslint/naming-convention
		MuiCard: {
			styleOverrides: {
				root: {
					backgroundColor: '#fff',
				},
			},
		},
	},
});
