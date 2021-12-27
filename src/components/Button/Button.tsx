import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button, ThemeProvider } from '@mui/material';
import buttonTheme from '../../styles/buttons.theme';

interface Props {
  color?: 'primary' | 'secondary' | 'tertiary';
  label: string;
  icon?: boolean;
  variant?: string;
  className?: string;
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
}

const ButtonComp = ({
  color,
  label,
  icon,
  className,
  disabled,
  size,
}: Props) => {
  console.log('buttonTheme', buttonTheme, color);
  return (
    <ThemeProvider theme={buttonTheme}>
      <Button
        color={color}
        endIcon={icon && <ArrowForwardIcon />}
        className={className}
        disabled={disabled}
        size={size}>
        {label}
      </Button>
    </ThemeProvider>
  );
};

ButtonComp.defaultProps = {
  onClick: () => null,
  icon: false,
  size: 'large',
  variant: 'contained',
  className: '',
};

export default ButtonComp;
