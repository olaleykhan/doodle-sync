import React, {FC} from 'react';
import {Box, Typography, Slider, Button, Checkbox, FormControlLabel} from '@mui/material';
import ChromePicker from 'components/ChromePicker';
import {type ColorChangeHandler} from 'react-color';

interface Props {
  lineWidth: number;
  drawingColor: string;
  handleColorChange: ColorChangeHandler;
  setLineWidth: (lineWidth: number) => void;
  handleClearCanvas: () => void;
  isDrawingMode: boolean;
  setIsDrawingMode: (isDrawingMode: boolean) => void;
}
const Controls:FC<Props> = ({
	lineWidth,
	drawingColor,
	handleColorChange,
	setLineWidth,
	handleClearCanvas,
	isDrawingMode,
	setIsDrawingMode,
}) => {
	const handleDrawingModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsDrawingMode(!event.target.checked);
	};

	return (
		<Box>
			<Typography variant='h3'>Controls</Typography>

			<ChromePicker color={drawingColor} onChange={handleColorChange} />
			<Typography gutterBottom>Line Width</Typography>
			<Slider
				value={lineWidth}
				min={1}
				max={50}
				step={1}
				onChange={(_, newValue) => {
					setLineWidth(newValue as number);
				}}
			/>
			{/* <Button variant='outlined' onClick={() => {
				setIsDrawingMode(!isDrawingMode);
			}} sx={{
				mr: 2,
			}} >
				{isDrawingMode ? 'Disable Drawing' : 'Enable Drawing'}
			</Button> */}

			<FormControlLabel
				label={'Disable Drawing'}

				control={<Checkbox
					checked={!isDrawingMode}

					onChange={handleDrawingModeChange}
				/>
				}
			/>

			<Button variant='contained' color='secondary' onClick={handleClearCanvas}> Clear Canvas </Button>

		</Box>
	);
};

export default Controls;
