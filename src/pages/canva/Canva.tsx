import React, {useRef, useEffect, useState} from 'react';
import {fabric} from 'fabric';
import {Button, Card, Grid} from '@mui/material';
import {type ColorChangeHandler} from 'react-color';
import Controls from './components/Controls';
// import {PencilBrush, SprayBrush} from 'fabric/fabric-impl';

const FabricCanvas: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [fabricCanvas, setFabricCanvas] = useState<fabric.Canvas | undefined>(undefined);
	const [drawingColor, setDrawingColor] = useState('black');
	const [lineWidth, setLineWidth] = useState(5);
	const [isDrawingMode, setIsDrawingMode] = useState(true);
	// const [brush, setBrush] = useState<PencilBrush| SprayBrush| undefined>(undefined);
	const [brushType, setBrushType] = useState('pencil');

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
				canvas.height = window.innerHeight - 4;
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
	}, [drawingColor, lineWidth, isDrawingMode]);

	// useEffect(() => {
	// 	// create a new fabric.Canvas object
	// 	const c = new fabric.Canvas(canvasRef.current);
	// 	setFabricCanvas(c);

	// 	// Create a new brush object
	// 	const b = new fabric.SprayBrush();
	// 	// setBrush(b);
	// 	fabricCanvas.freeDrawingBrush = b;
	// 	fabricCanvas.renderAll();
	// }, [brushType]);

	// Create brush
	useEffect(() => {
		if (fabricCanvas && brushType === 'spray') {
			const b = new fabric.SprayBrush();
			fabricCanvas.freeDrawingBrush = b;
		// fabricCanvas.renderAll();
		}
	}, [brushType, fabricCanvas]);

	const handleChangeBrush = () => {
		setBrushType('spray');
	};

	return (
		<Grid container spacing={4} >
			<Grid item xs={12} md={9}>
				<Card sx={{height: '100%'}} raised>
					<canvas ref={canvasRef} />
				</Card>
			</Grid>
			<Grid item xs={12} md={3}>

				<Grid>
					<Button onClick={handleChangeBrush}> Change brush</Button>
				</Grid>
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
