import {screen, render} from '@testing-library/react';
import Controls from './Controls';

describe('Canvas Control component', () => {
	render(<Controls
		lineWidth={1}
		setLineWidth={() => {}}
		drawingColor={'#000000'}
		handleColorChange={() => {}}
		handleClearCanvas={() => {}}
		isDrawingMode={false}
		setIsDrawingMode={() => {}}
	/>);

	//   Test('renders without crashing', () => {
	//     render(<Controls
	//         lineWidth={1}
	//         setLineWidth={() => {}}
	//         drawingColor={'#000000'}
	//         handleColorChange={() => {}}
	//         handleClearCanvas={() => {}}
	//         isDrawingMode={false}
	//         setIsDrawingMode={() => {}}
	//         />)
	//   });

	test('various control modes', () => {
		const lineWidthInput = screen.getByTestId('lineWidthInput');
		expect(lineWidthInput).toBeInTheDocument();
		// TODO: add integration test after business required has been nailed. different kinds of canvas modes
	});
});
