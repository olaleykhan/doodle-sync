import React, { useRef, useEffect, useState } from 'react';
import { fabric } from 'fabric';
import { Card, Grid, Box, Typography, Slider, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ChromePicker from './ChromePicker';
import { ColorChangeHandler } from 'react-color';


const FabricCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [fabricCanvas, setFabricCanvas] = useState<fabric.Canvas | null>(null);
    const [drawingColor, setDrawingColor] = useState('black');
    const [lineWidth, setLineWidth] = useState(10);
    const [isDrawingMode, setIsDrawingMode] = useState(true);

    const handleColorChange: ColorChangeHandler = (color, event) => {
        setDrawingColor(color.hex);
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
        newFabricCanvas.freeDrawingBrush.width = lineWidth;
        newFabricCanvas.freeDrawingBrush.color = drawingColor;
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
                <Card sx={{ height: '100%' }} raised>
                    <canvas ref={canvasRef} />
                </Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Box>
                    <Typography variant="h3">Controls</Typography>
                    <FormControl fullWidth>
                        <InputLabel id="drawing-color-label">Drawing Color</InputLabel>
                        <Select
                            labelId="drawing-color-label"
                            value={drawingColor}
                            onChange={(e) => setDrawingColor(e.target.value as string)}
                        >
                            <MenuItem value="black">Black</MenuItem>
                            <MenuItem value="red">Red</MenuItem>
                            <MenuItem value="blue">Blue</MenuItem>
                            {/* Add more colors as needed */}
                        </Select>
                    </FormControl>

                    <ChromePicker color={drawingColor} onChange={handleColorChange} />
                    <Typography gutterBottom>Line Width</Typography>
                    <Slider
                        value={lineWidth}
                        min={1}
                        max={50}
                        step={1}
                        onChange={(_, newValue) => setLineWidth(newValue as number)}
                    />
                    <Button onClick={() => setIsDrawingMode(!isDrawingMode)}>
                        {isDrawingMode ? 'Disable Drawing' : 'Enable Drawing'}
                    </Button>

                </Box>
            </Grid >
        </Grid >

    );
};

export default FabricCanvas;
