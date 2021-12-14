import { useState } from 'react';
import Slider from '@mui/material/Slider';

const SliderSingle = ({ defaultValue, size, valueLabelDisplay, onChange, min, max, ...props }: any) => {
    // const [value, setValue] = useState([min, max]);

    const handleChange = (event: any, newValue: any) => {
        // setValue(newValue);
        onChange(newValue);
    };
    return (
        <Slider
            defaultValue={defaultValue}
            size={size}
            valueLabelDisplay={valueLabelDisplay}
            onChange={handleChange}
            min={min}
            max={max}
            // value={value}
            {...props}
        />
    )
}

SliderSingle.defaultProps = {
    size: 'small',
    valueLabelDisplay: 'auto',
    onChange: () => null
}

export default SliderSingle