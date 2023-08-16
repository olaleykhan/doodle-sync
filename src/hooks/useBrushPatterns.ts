import {fabric} from 'fabric';

export type PatternBrushes = {
  vLinePatternBrush: fabric.PatternBrush;
  hLinePatternBrush: fabric.PatternBrush;
  squarePatternBrush: fabric.PatternBrush;
  diamondPatternBrush: fabric.PatternBrush;
  texturePatternBrush: fabric.PatternBrush;
};

export default (canvas: fabric.Canvas, color:string): PatternBrushes => {
	const createPatternCanvas = (width: number, height: number): HTMLCanvasElement => {
		const patternCanvas = document.createElement('canvas');
		patternCanvas.width = width;
		patternCanvas.height = height;
		return patternCanvas;
	};

	const vLinePatternBrush = new fabric.PatternBrush(canvas);
	vLinePatternBrush.getPatternSrc = function () {
		const patternCanvas = createPatternCanvas(10, 10);
		const ctx = patternCanvas.getContext('2d')!;
		ctx.strokeStyle = color;
		ctx.lineWidth = 5;
		ctx.beginPath();
		ctx.moveTo(0, 5);
		ctx.lineTo(10, 5);
		ctx.closePath();
		ctx.stroke();
		return patternCanvas;
	};

	const hLinePatternBrush = new fabric.PatternBrush(canvas);
	hLinePatternBrush.getPatternSrc = function () {
		const patternCanvas = createPatternCanvas(10, 10);
		const ctx = patternCanvas.getContext('2d')!;

		ctx.strokeStyle = this.color;
		ctx.lineWidth = 5;
		ctx.beginPath();
		ctx.moveTo(5, 0);
		ctx.lineTo(5, 10);
		ctx.closePath();
		ctx.stroke();

		return patternCanvas;
	};

	const squarePatternBrush = new fabric.PatternBrush(canvas);
	hLinePatternBrush.getPatternSrc = function () {
		const patternCanvas = createPatternCanvas(10, 10);
		const ctx = patternCanvas.getContext('2d')!;

		ctx.fillStyle = this.color;
		ctx.fillRect(0, 0, 10, 2);

		return patternCanvas;
	};

	const diamondPatternBrush = new fabric.PatternBrush(canvas);
	hLinePatternBrush.getPatternSrc = function () {
		const patternCanvas = createPatternCanvas(10, 10);
		const ctx = patternCanvas.getContext('2d')!;

		ctx.strokeStyle = this.color;
		ctx.lineWidth = 5;
		ctx.beginPath();
		ctx.moveTo(5, 0);
		ctx.lineTo(5, 10);
		ctx.closePath();
		ctx.stroke();

		return patternCanvas;
	};

	const img = new Image();
	img.src = '../assets/honey_im_subtle.png';

	const texturePatternBrush = new fabric.PatternBrush(canvas);
	hLinePatternBrush.getPatternSrc = function () {
		const patternCanvas = createPatternCanvas(10, 10);
		const ctx = patternCanvas.getContext('2d')!;
		const imge = new Image();
		imge.src = '../assets/honey_im_subtle.png';
		ctx.drawImage(img, 0, 0, patternCanvas.width, patternCanvas.height);
		return patternCanvas;
	};

	return {
		vLinePatternBrush,
		hLinePatternBrush,
		squarePatternBrush,
		diamondPatternBrush,
		texturePatternBrush,
	};
};
