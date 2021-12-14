import React from 'react';
import styles from './Footer.module.scss';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import logoImage from '../../assets/svg/logo.svg';
import settingsImage from '../../assets/svg/setting-dark.svg';
import moonImage from '../../assets/svg/moon-white.svg';
import twitterImage from '../../assets/svg/twitter.svg';
import instagramImage from '../../assets/svg/instagram.svg';
import websiteImage from '../../assets/svg/website.svg';
import linkedinImage from '../../assets/svg/linkedin.svg';
import footerLogoImage from '../../assets/svg/footer-logo.svg';
import {Switch} from "../Switch/Switch.stories";
import {Box, Typography} from "@mui/material";
import Divider from '@mui/material/Divider';
import {Input} from "../Input/Input.stories";
import {Buttons} from "../Button/Button.stories";
import {solutionsArray, useCases, resources, company} from './constants';

const Footer = () => {
    const handleSubscribe = () => {
        console.log('handle Subscribe');
    }
    return(
        <footer className={styles.footer}>
            <Box className={styles.customContainer}>
                <Box className={styles.topContent}>
                    <Box className={styles.logoSection}>
                        <Router>
                            <Link to="/"><img src={logoImage} alt="logo" className="mb-3"/> </Link>
                        </Router>
                        <p className="averta-regular mb-0">Fullstack product teams to start, run and <br /> grow your website</p>
                    </Box>
                    <Box className={styles.socialIconsWrapper}>
                        <Box className={styles.socialIconsInner}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src={settingsImage} alt="settings" />
                                <Switch />
                                <img src={moonImage} alt="settings" />
                            </Box>
                            <Box>
                                <Router><Link to="twitter.com"><img src={twitterImage} alt="twitter"/> </Link></Router>
                                <Router><Link to="instagram.com"><img src={instagramImage} alt="instagram"/> </Link></Router>
                                <Router><Link to="linkedin.com"><img src={linkedinImage} alt="Linkedin"/> </Link></Router>
                                <Router><Link to="twitter.com"><img src={websiteImage} alt="website"/> </Link></Router>
                            </Box>
                        </Box>
                        <Box sx={{display: 'flex', columnGap: '8px', marginTop: '24px'}}>
                            <Input label="Subscribe to our newsletter" />
                            <Buttons label="Subscribe" size="medium" />
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.mainListingWrapper}>
                    <Box className={styles.listingWrapper}>
                        <Typography variant='h6'>Solutions</Typography>
                        <ul>
                            {
                                solutionsArray.map((item,index) =>  <li><Router><Link to="/" key={index}>{item.label}</Link></Router></li>)
                            }
                        </ul>
                    </Box>
                    <Box className={styles.listingWrapper}>
                        <Typography variant='h6'>Use Cases</Typography>
                        <ul>
                            {
                                useCases.map((item,index) =>  <li><Router><Link to="/" key={index}>{item.label}</Link></Router></li>)
                            }
                        </ul>
                    </Box>
                    <Box className={styles.listingWrapper}>
                        <Typography variant='h6'>Resources</Typography>
                        <ul>
                            {
                                resources.map((item,index) =>  <li><Router><Link to="/" key={index}>{item.label}</Link></Router></li>)
                            }
                        </ul>
                    </Box>
                    <Box className={styles.listingWrapper}>
                        <Typography variant='h6'>Company</Typography>
                        <ul>
                            {
                                company.map((item,index) =>  <li><Router><Link to="/" key={index}>{item.label}</Link></Router></li>)
                            }
                        </ul>
                    </Box>
                </Box>
                <Divider className={styles.borderColor} />
                <Box className={styles.bottomContent}>
                    <Box sx={{display: 'flex', alignItems: 'center', columnGap: '1rem'}}>
                        <img src={footerLogoImage} alt="footer logo" />
                        <Router><Link to="/">Privacy</Link></Router>
                        <Router><Link to="/">Sitemap</Link></Router>
                    </Box>
                    <p>© 2021 Webstacks. All Rights Reserved.</p>
                </Box>
            </Box>
        </footer>
    )
};
export default Footer;
