import React from 'react'
import { SketchPicker, ColorChangeHandler } from 'react-color';

interface Props {
    color: string
    onChange: ColorChangeHandler
}
const ChromePicker: React.FC<Props> = ({ color, onChange }) => {
    return (
        <SketchPicker color={color} onChangeComplete={onChange} />
    )
}

export default ChromePicker