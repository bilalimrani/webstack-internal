import Checkbox from '@mui/material/Checkbox';

const CheckboxComp = ({ isDisabled, value }: any) => {
    return (
        <Checkbox disabled={isDisabled} value={value} />
    )
}

CheckboxComp.defaultProps = {
    isDisabled: false,
}

export default CheckboxComp