import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectComp = ({ list, selected, label, onChange }: any) => {

    const [defaultValue, setDefaultValue] = useState(selected || '');

    const handleChange = (event: any) => {
        const value = event.target.value;
        setDefaultValue(value);
        onChange(value)
    };
    return (
        <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={defaultValue}
                onChange={handleChange}
                autoWidth
                label={label}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
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