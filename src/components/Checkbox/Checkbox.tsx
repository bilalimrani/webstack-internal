import { styled } from '@mui/material/styles';
import { FormControlLabel, Checkbox } from '@mui/material';
import { COLOR } from '../../styles/colors';

interface Props {
  disabled?: boolean;
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BpIcon = styled('span')(() => ({
  borderRadius: 4,
  width: 20,
  height: 20,
  border: `1px solid ${COLOR.secondary300}`,
  backgroundColor: COLOR.white,
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  '.Mui-checked &': {
    boxShadow: '0px 0px 0px 4px #F4EBFF',
  },
  'input:hover ~ &': {
    backgroundColor: COLOR.primary50,
    border: `1px solid ${COLOR.neutral600}`,
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    border: `1px solid ${COLOR.secondary200}`,
    background: COLOR.secondary100,
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  '&:before': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    color: COLOR.neutral600,
    content: '"✔"',
  },
});

const CheckboxComp = ({ disabled, label, checked, onChange }: Props) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          checkedIcon={<BpCheckedIcon />}
          icon={<BpIcon />}
          onChange={onChange}
        />
      }
      disabled={disabled}
      label={label || ''}
    />
  );
};

CheckboxComp.defaultProps = {
  onChange: () => null,
  label: '',
};

export default CheckboxComp;
