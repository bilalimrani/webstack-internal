import Switch from '@mui/material/Switch';

const SwitchComp = ({ onChange, ...rest }: any) => {
    return (
        <Switch
            onChange={onChange}
            {...rest}
        />
    )
}

SwitchComp.defaultProps = {
    label: '',
    onChange: () => null,
}

export default SwitchComp