import Radio from '@mui/material/Radio';

const RadioComp = ({ value, defaultChecked, onChange }: any) => {
    return <Radio value={value} defaultChecked={defaultChecked} onChange={onChange} />
}

RadioComp.defaultProps = {
    onChange: () => null
}

export default RadioComp