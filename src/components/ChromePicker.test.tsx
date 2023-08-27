
import {screen, render} from '@testing-library/react';
import ChromePicker from './ChromePicker';

describe('ChromePicker works as expected', () => {
	render(<ChromePicker
		color='red'
		onChange={() => {}}
	/>);

	test('chrome picker initially renders with correct color', () => {
		const color = screen.getByTestId('pen-color-display');
		expect(color).toHaveStyle('background-color: red');
	});
});
