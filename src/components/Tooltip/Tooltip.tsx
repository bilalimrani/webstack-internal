import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { LIGHT_MODE_THEME } from '../../utils/constants';
import { COLOR } from '../../styles/colors';

interface Props {
  title: string;
  arrowPosition: string;
  arrow?: boolean;
  children: any;
}

const BootstrapTooltip = styled(({ children, className, ...props }: any) => (
  <Tooltip {...props} classes={{ popper: className }}>
    <div>{children}</div>
  </Tooltip>
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color:
      theme.palette.mode === LIGHT_MODE_THEME
        ? COLOR.secondary900
        : COLOR.white,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    color:
      theme.palette.mode === LIGHT_MODE_THEME
        ? COLOR.white
        : COLOR.secondary700,
    backgroundColor:
      theme.palette.mode === LIGHT_MODE_THEME
        ? COLOR.secondary900
        : COLOR.white,
  },
}));

const TooltipComp = ({ children, title, arrowPosition, arrow }: Props) => {
  return (
    <BootstrapTooltip
      title={title}
      placement={arrowPosition}
      arrow={arrow}
      children={children}
    />
  );
};

export default TooltipComp;
