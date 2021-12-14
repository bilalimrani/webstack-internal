import { useState } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { useEffect } from 'react-transition-group/node_modules/@types/react';

const SelectComp = ({ list, defaultValue, label, onChange }: any) => {
    const [value, setValue] = useState(defaultValue || '');

    const handleChange = (event: any) => {
        const value = event.target.value;
        setValue(value);
        onChange(value)
    };
    return (
        <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={value}
                onChange={handleChange}
                autoWidth
                label={label}
                defaultValue={defaultValue}
            >
                {list.map((item: string, idx: number) => (
                    <MenuItem key={idx} value={item}>{item}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

SelectComp.defaultProps = {
    onChange: () => null
}

export default SelectComp