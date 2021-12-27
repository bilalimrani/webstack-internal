import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Switch from "../Switch/Switch";

const ThemeSwitcher = ({ theme }: any) => {
  const toggleHandler = () => {
    theme?.themeMode?.toggleThemeMode();
  };
  return (
    <>
      <LightModeOutlinedIcon />
      <Switch onChange={toggleHandler} label="Toggle Theme" />
      <DarkModeOutlinedIcon />
    </>
  );
};

export default ThemeSwitcher;
