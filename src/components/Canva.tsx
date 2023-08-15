import React, {useRef, useEffect, useState} from 'react';
import {fabric} from 'fabric';
import {Card, Grid, Box, Typography, Slider, Button} from '@mui/material';
import ChromePicker from 'components/ChromePicker';
import {type ColorChangeHandler} from 'react-color';

const FabricCanvas = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [fabricCanvas, setFabricCanvas] = useState<fabric.Canvas | undefined>(undefined);
	const [drawingColor, setDrawingColor] = useState('black');
	const [lineWidth, setLineWidth] = useState(5);
	const [isDrawingMode, setIsDrawingMode] = useState(true);

	const handleColorChange: ColorChangeHandler = color => {
		setDrawingColor(color.hex);
	};

	const handleClearCanvas = () => {
		if (fabricCanvas) {
			fabricCanvas.clear();
		}
	};

	useEffect(() => {
		const updateCanvasSize = () => {
			const canvas = canvasRef.current;
			if (canvas) {
				canvas.width = window.innerWidth - 300;
				canvas.height = window.innerHeight - 40;
			}
		};

		// Initial canvas size
		updateCanvasSize();

		// Update canvas size on window resize
		window.addEventListener('resize', updateCanvasSize);

		// Initialize Fabric.js canvas
		const newFabricCanvas = new fabric.Canvas(canvasRef.current, {
			isDrawingMode: true,
		});
		setFabricCanvas(newFabricCanvas);

		return () => {
			newFabricCanvas.dispose();
			window.removeEventListener('resize', updateCanvasSize);
		};
	}, []);

	useEffect(() => {
		if (fabricCanvas) {
			fabricCanvas.freeDrawingBrush.color = drawingColor;
			fabricCanvas.freeDrawingBrush.width = lineWidth;
			fabricCanvas.isDrawingMode = isDrawingMode;
		}
	}, [drawingColor, lineWidth, isDrawingMode, fabricCanvas]);

	return (
		<Grid container spacing={4} >
			<Grid item xs={12} md={9}>
				<Card sx={{height: '100%'}} raised>
					<canvas ref={canvasRef} />
				</Card>
			</Grid>
			<Grid item xs={12} md={3}>
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
					<Button variant='outlined' onClick={() => {
						setIsDrawingMode(!isDrawingMode);
					}} sx={{
						mr: 2,
					}} >
						{isDrawingMode ? 'Disable Drawing' : 'Enable Drawing'}
					</Button>

					<Button variant='contained' color='secondary' onClick={handleClearCanvas}> Clear Canvas </Button>

				</Box>
			</Grid >
		</Grid >

	);
};

export default FabricCanvas;
