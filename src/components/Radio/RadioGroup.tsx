import { useState } from 'react';
import { RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import Radio from './Radio';

const RadioGroupComp = ({ list, defaultValue, row, name }: any) => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    return (
        <FormControl component="fieldset">
            <RadioGroup
                defaultValue={defaultValue}
                name={name}
                row={row}
                value={value}
                onChange={handleChange}
            >
                {list.map((item: string, idx: number) => (
                    <FormControlLabel
                        key={idx}
                        value={item}
                        control={<Radio value={item} defaultChecked={item === defaultValue} />}
                        label={item}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
}

RadioGroupComp.defaultProps = {
    list: [],
    name: ''
}

export default RadioGroupComp;