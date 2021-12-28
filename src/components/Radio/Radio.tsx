import { styled } from '@mui/material/styles';
import { FormControlLabel, Radio } from '@mui/material';
import { COLOR } from '../../styles/colors';

interface Props {
  label?: string;
  value?: string;
  isDisabled?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BpIcon = styled('span')(() => ({
  margin: 0,
  borderRadius: '50%',
  width: 20,
  height: 20,
  border: `1px solid ${COLOR.secondary300}`,
  backgroundColor: COLOR.white,
  '.MuiFormControlLabel-root &': {
    margin: 0,
  },
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
  backgroundColor: COLOR.primary50,
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 20,
    height: 20,
    backgroundImage: `radial-gradient(${COLOR.neutral600}, ${COLOR.neutral600} 28%,transparent 32%)`,
    content: '""',
    border: `1px solid ${COLOR.neutral600}`,
    borderRadius: '50%',
  },
  'input:hover ~ &': {
    backgroundColor: COLOR.primary50,
  },
});

const RadioComp = ({
  isDisabled,
  value,
  defaultChecked,
  onChange,
  label,
}: Props) => {
  return (
    <FormControlLabel
      control={
        <Radio
          value={value}
          disabled={isDisabled}
          checkedIcon={<BpCheckedIcon />}
          icon={<BpIcon />}
          onChange={onChange}
          defaultChecked={defaultChecked}
        />
      }
      label={label || ''}
    />
  );
};

RadioComp.defaultProps = {
  onChange: () => null,
};

export default RadioComp;
