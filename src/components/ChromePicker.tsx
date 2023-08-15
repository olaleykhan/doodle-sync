import React, { useState } from 'react'
import { SketchPicker, ColorChangeHandler, ColorResult } from 'react-color';
import { Box } from '@mui/system';
import { ClickAwayListener } from '@mui/material';

interface Props {
    color: string
    onChange: ColorChangeHandler
}
const ChromePicker: React.FC<Props> = ({ color, onChange }) => {
    const [pickerOpen, setPickerOpen] = useState(false);
    const handleColorClick = () => {
        setPickerOpen(!pickerOpen);
    };

    const handleColorChangeComplete = (color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(color, event);
        setPickerOpen(false); // Close the picker after selection
    };

    return (
        <Box sx={{
            position: 'relative',
        }} >
            <Box sx={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                background: color,
                cursor: 'pointer',

            }} onClick={handleColorClick} />
            {
                pickerOpen && (
                    <ClickAwayListener onClickAway={() => setPickerOpen(false)}>
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
    )
}

export default ChromePicker