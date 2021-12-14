import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '.';

const CheckboxGroup = ({ options, onChange, row }: any) => {

    return (
        <FormGroup row={row}>
            {options.map((item: any, idx: any) => (
                <FormControlLabel
                    onChange={onChange}
                    key={idx}
                    value={item.value}
                    control={<Checkbox isDisabled={item.disabled} value={item.value} />}
                    label={item.label}
                />
            ))}

        </FormGroup>
    );
}

CheckboxGroup.defaultProps = {
    options: [],
    onChange: () => null,
    row: false
}

export default CheckboxGroup;