import Switch from '@mui/material/Switch';

const SwitchComp = ({ label, ...props }: any) => {
    label = { inputProps: { 'aria-label': label } };
    return (
        <Switch
            {...props}
            {...label}
        />
    )
}

SwitchComp.defaultProps = {
    label: 'Switch demo'
}

export default SwitchComp