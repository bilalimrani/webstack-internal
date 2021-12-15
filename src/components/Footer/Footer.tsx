import React from 'react';
import styles from './Footer.module.scss';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import logoImage from '../../assets/svg/logo.svg';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
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
                                <LightModeOutlinedIcon />
                                <Switch />
                                <DarkModeOutlinedIcon />
                            </Box>
                            <Box>
                                <Router><Link to="twitter.com"><TwitterIcon /></Link></Router>
                                <Router><Link to="instagram.com"><InstagramIcon /></Link></Router>
                                <Router><Link to="linkedin.com"><LinkedInIcon /></Link></Router>
                                <Router><Link to="twitter.com"><LanguageIcon /></Link></Router>
                            </Box>
                        </Box>
                        <Box className={styles.subscriptionWrapper}>
                            <input type="text" placeholder="Subscribe to our newsletter" />
                            <Buttons type="primary" label="Subscribe" size="small" cssClass={styles.btnStyling} />
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
