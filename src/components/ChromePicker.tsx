import React from 'react'
import { ChromePicker as ColorPicker, SketchPicker, ColorChangeHandler } from 'react-color';

interface Props {
    color: string
    onChange: ColorChangeHandler
}
const ChromePicker: React.FC<Props> = ({ color, onChange }) => {
    return (
        <ColorPicker color={color} onChangeComplete={onChange} />
    )
}

export default ChromePicker