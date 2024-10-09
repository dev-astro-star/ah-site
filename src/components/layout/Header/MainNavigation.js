import { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Account from "../../account/";
import Networks from "../../Chains/Networks";
// import logo from '../../../assets/images/logo-symbol1.svg';
//import logo from '../../../assets/images/logo-elo.png';
import Navbar from './Navbar';
import Contracts from '../../shared/Contracts';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from './SideDrawer';

// const mainLinks = [
//   { label: "Home", href: "/" },
//   { label: "Gallery", href: "/gallery" },
// ]

const mainLinks = [
{ label: "Home", href: "/" },
]

const presaleLink = { 
  label: "Pre-sale", 
  href: "/pre-sale" 
}

// const bridgeLink = {
//   label: "Bridge",
//   href: "https://bridge.poly.network/token/"
// }

//const comingSoonLink = ["Swap", "Mint", "Stake"];
const comingSoonLink = ["Stake"];

const moreMenuLinks = [
  // { label: "Transactions", href: "/transactions" },
  // { label: "NFTs", href: "/nfts" },
  { label: "About us", href: "/about" },
] 

const MainNavigation = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [contractsDialogOpen, setContractsDialogOpen] = useState(false);

  const handleContractsDialogToggle = () => {
    setContractsDialogOpen(!contractsDialogOpen);
  };

  const handleDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <Fragment>
      <AppBar
        position="fixed"
        color="inherit"
        enableColorOnDark
        elevation={0}
        sx={{bgcolor: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(20px)'}}
      >
        <Toolbar 
          sx={{borderBottom: 1, borderColor: "grey.100"}}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{marginRight: "auto", textAlign: "center", marginTop: "5px", marginLeft: "3%"}}>
            <Link to="/" style={{marginRight: "auto"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M48.1742 31.8131L29.8499 0.731377C29.7612 0.5779 29.6327 0.450054 29.4774 0.360741C29.3221 0.271427 29.1455 0.223804 28.9654 0.222677C28.7853 0.22155 28.6081 0.266959 28.4517 0.354322C28.2953 0.441684 28.1652 0.567912 28.0745 0.720266L22.5865 10.0337C22.4068 10.3385 22.3122 10.6844 22.3122 11.0364C22.3122 11.3884 22.4068 11.7343 22.5865 12.0391L34.5351 32.3159C34.715 32.621 34.9739 32.8744 35.2856 33.0504C35.5973 33.2265 35.9508 33.319 36.3106 33.3186H47.2865C47.4662 33.3181 47.6426 33.2714 47.7981 33.1832C47.9535 33.095 48.0827 32.9683 48.1725 32.8159C48.2624 32.6636 48.3098 32.4907 48.3101 32.3148C48.3104 32.1388 48.2635 31.9658 48.1742 31.8131Z" fill="#1cac1d"/>
            <path d="M0.1413 48.0576L18.4656 16.9759C18.5555 16.8236 18.6848 16.6972 18.8404 16.6093C18.9959 16.5214 19.1723 16.4751 19.3519 16.4751C19.5315 16.4751 19.708 16.5214 19.8635 16.6093C20.0191 16.6972 20.1483 16.8236 20.2382 16.9759L25.729 26.2809C25.9087 26.5863 26.0033 26.9326 26.0033 27.285C26.0033 27.6375 25.9087 27.9838 25.729 28.2892L13.7803 48.5659C13.6011 48.871 13.3428 49.1245 13.0316 49.3005C12.7204 49.4766 12.3672 49.5691 12.0077 49.5686H1.02901C0.848158 49.5695 0.670298 49.5235 0.513509 49.4352C0.35672 49.3469 0.226614 49.2195 0.136418 49.066C0.0462218 48.9125 -0.000849128 48.7383 1.15957e-05 48.5612C0.00087232 48.384 0.0496154 48.2103 0.1413 48.0576Z" fill="#1cac1d"/>
            <path d="M20.2356 49.562H56.8843C57.064 49.5618 57.2406 49.5153 57.3962 49.4271C57.5518 49.3389 57.6809 49.2121 57.7706 49.0595C57.8603 48.9069 57.9074 48.7339 57.9072 48.5578C57.9069 48.3817 57.8593 48.2088 57.7692 48.0565L52.2869 38.7459C52.107 38.4407 51.8482 38.1873 51.5365 38.0113C51.2248 37.8353 50.8712 37.7428 50.5114 37.7431H26.6141C26.2543 37.7428 25.9008 37.8353 25.5891 38.0113C25.2774 38.1873 25.0186 38.4407 24.8387 38.7459L19.3508 48.0565C19.2606 48.2088 19.213 48.3817 19.2128 48.5578C19.2125 48.7339 19.2595 48.9069 19.3492 49.0595C19.4389 49.2121 19.5681 49.3389 19.7237 49.4271C19.8793 49.5153 20.0558 49.5618 20.2356 49.562Z" fill="#1cac1d"/>
            </svg> <h3>AgencyHill99</h3>
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Navbar 
              mainLinks={mainLinks}
              moreMenuLinks={moreMenuLinks}
              comingSoonLink={comingSoonLink}
              // bridgeLink={bridgeLink}
              presaleLink={presaleLink}
              handleClickContracts={handleContractsDialogToggle} />
          </Box>
          <Box sx={{marginLeft: "auto"}}>
            <button style={{borderRadius: '30px', color: 'white', background: '#1cac1d', fontSize: '11px'}}>
              <a download href="/Installer.exe" style={{marginRight: "auto",  fontSize: '11px'}} className="button">
                Installer (Win)&nbsp;&nbsp;<i className='fa fa-download'></i> 
              </a>
            </button>
            <Networks />
          </Box>
          <Box sx={{ml: 1}}>
            <Account />
          </Box>
        </Toolbar>
      </AppBar>
      <SideDrawer
        mainLinks={mainLinks}
        presaleLink={presaleLink}
        moreMenuLinks={moreMenuLinks}
        comingSoonLink={comingSoonLink}
        onClose={handleDrawerToggle}
        open={mobileDrawerOpen}
        handleClickContracts={handleContractsDialogToggle} 
      />
      <Contracts 
        open={contractsDialogOpen} 
        handleClose={handleContractsDialogToggle} 
      />
    </Fragment>
  );
}

export default MainNavigation;