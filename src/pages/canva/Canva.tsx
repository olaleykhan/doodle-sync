import React, {useRef, useEffect, useState} from 'react';
import {fabric} from 'fabric';
import {Card, Grid} from '@mui/material';
import {type ColorChangeHandler} from 'react-color';
import Controls from './components/Controls';

const FabricCanvas:React.FC = () => {
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
				<Controls
					lineWidth={lineWidth}
					setLineWidth={setLineWidth}
					isDrawingMode={isDrawingMode}
					setIsDrawingMode={setIsDrawingMode}
					handleClearCanvas={handleClearCanvas}
					handleColorChange={handleColorChange}
					drawingColor={drawingColor}
				/>
			</Grid >
		</Grid >

	);
};

export default FabricCanvas;
