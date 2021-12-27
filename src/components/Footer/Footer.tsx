import styles from './Footer.module.scss';
import { Box, Typography, Divider, Link, Input } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '../Button/Button';
import footerLogoImage from '../../assets/svg/footer-logo.svg';
import darkLogo from '../../assets/images/blackLogo.png';
import lightLogo from '../../assets/images/lightLogo.png';
import { solutionsArray, useCases, resources, company } from './constants';
import { getCurrentYear } from '../../utils/date';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { LIGHT_MODE_THEME } from '../../utils/constants';

const Footer = ({ theme }: any) => {
  const getLinks = (links: any) => {
    return (
      <ul>
        {links.map((item: any, index: number) => (
          <li key={index}>
            <Link onClick={handleClick} color="inherit" href="/">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  const handleClick = (event: any) => {
    event.preventDefault();
  };

  const logo = theme?.theme === LIGHT_MODE_THEME ? darkLogo : lightLogo;

  return (
    <footer className={styles.footer}>
      <Box className={styles.customContainer}>
        <Box className={styles.topContent}>
          <Box className={styles.logoSection}>
            <Link href="/" onClick={handleClick}>
              <img src={logo} alt="logo" className="mb-3" />
            </Link>
            <p className="averta-regular mb-0">
              Fullstack product teams to start, run and <br /> grow your website
            </p>
          </Box>
          <Box className={styles.socialIconsWrapper}>
            <Box className={styles.socialIconsInner}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ThemeSwitcher theme={theme} />
              </Box>
              <Box>
                <Link onClick={handleClick} color="inherit" href="twitter.com">
                  <TwitterIcon />
                </Link>
                <Link
                  onClick={handleClick}
                  color="inherit"
                  href="instagram.com">
                  <InstagramIcon />
                </Link>
                <Link onClick={handleClick} color="inherit" href="linkedin.com">
                  <LinkedInIcon />
                </Link>
                <Link onClick={handleClick} color="inherit" href="twitter.com">
                  <LanguageIcon />
                </Link>
              </Box>
            </Box>
            <Box className={styles.subscriptionWrapper}>
              <Input type="text" placeholder="Subscribe to our newsletter" />
              <Button
                label="Subscribe"
                size="small"
                className={styles.btnStyling}
              />
            </Box>
          </Box>
        </Box>
        <Box className={styles.mainListingWrapper}>
          <Box className={styles.listingWrapper}>
            <Typography variant="h6">Solutions</Typography>
            {getLinks(solutionsArray)}
          </Box>
          <Box className={styles.listingWrapper}>
            <Typography variant="h6">Use Cases</Typography>
            {getLinks(useCases)}
          </Box>
          <Box className={styles.listingWrapper}>
            <Typography variant="h6">Resources</Typography>
            {getLinks(resources)}
          </Box>
          <Box className={styles.listingWrapper}>
            <Typography variant="h6">Company</Typography>
            {getLinks(company)}
          </Box>
        </Box>
        <Divider className={styles.borderColor} />
        <Box className={styles.bottomContent}>
          <Box
            sx={{ display: 'flex', alignItems: 'center', columnGap: '1rem' }}>
            <img src={footerLogoImage} alt="footer logo" />
            <Link color="inherit" href="/">
              Privacy
            </Link>
            <Link color="inherit" href="/">
              Sitemap
            </Link>
          </Box>
          <p>©{getCurrentYear()} Webstacks. All Rights Reserved.</p>
        </Box>
      </Box>
    </footer>
  );
};
export default Footer;
