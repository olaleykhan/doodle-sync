import React, {useState} from 'react';
import {SketchPicker, type ColorChangeHandler, type ColorResult} from 'react-color';
import {Box} from '@mui/system';
import {ClickAwayListener} from '@mui/material';

type Props = {
	color: string;
	onChange: ColorChangeHandler;
};
const ChromePicker: React.FC<Props> = ({color, onChange}) => {
	const [pickerOpen, setPickerOpen] = useState(false);
	const handleColorClick = () => {
		setPickerOpen(!pickerOpen);
	};

	const handleColorChangeComplete = (c: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(c, event);
		setPickerOpen(false); // Close the picker after selection
	};

	return (
		<Box sx={{
			position: 'relative',
		}} >
			<Box
				data-testid='pen-color-display'
				sx={{
					width: '3rem',
					height: '3rem',
					borderRadius: '50%',
					background: color,
					cursor: 'pointer',

				}} onClick={handleColorClick} />
			{
				pickerOpen && (
					<ClickAwayListener onClickAway={() => {
						setPickerOpen(false);
					}}>
						<Box sx={{
							position: 'absolute',
							zIndex: 2,
							top: '40px',
							left: 0,

						}} >
							<SketchPicker color={color} onChangeComplete={handleColorChangeComplete} />
						</Box>
					</ClickAwayListener>
				)
			}
		</Box>
	);
};

export default ChromePicker;
