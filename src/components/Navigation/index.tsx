import { Drawer as MuiDrawer, styled, Typography } from '@mui/material';

import { Routes } from './Routes';
import { DRAWER_WIDTH } from '../../utils/constants';
import { navClosedMixin, navOpenedMixin } from '../../styles/mixins';
import RadioGroupComp from '../Radio/RadioGroup';
interface NavigationProps {
  open: boolean | undefined;
  handleClose: () => void;
}

export const Navigation = ({ open, handleClose }: NavigationProps) => {
  return (
    <Drawer variant="permanent" open={open} onClose={handleClose}>
      <DrawerHeader />
      <RadioGroupComp list={['one', 'two']} />
      <Routes />
      <Typography variant='h6'>Heading 6</Typography>
    </Drawer>
  );
};

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...navOpenedMixin(theme),
    '& .MuiDrawer-paper': navOpenedMixin(theme),
  }),
  ...(!open && {
    ...navClosedMixin(theme),
    '& .MuiDrawer-paper': navClosedMixin(theme),
  }),
}));
