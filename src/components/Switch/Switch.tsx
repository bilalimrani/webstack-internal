import Switch from '@mui/material/Switch';

const SwitchComp = ({ label }: any) => {
    label = { inputProps: { 'aria-label': label } };
    return (
        <Switch {...label} />
    )
}

SwitchComp.defaultProps = {
    label: 'Switch demo'
}

export default SwitchComp