import { Link } from "react-router-dom"
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logoArt from "../../assets/images/AgecyHill99.jpg";
import ReactPlayer from 'react-player'

const HeroSection = () => {
  return (
    <Container className="fadeInUp">
      <Stack 
        direction="row"
        spacing={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box sx={{maxWidth: "700px", py: 5, mb: 5, mx: 'auto'}}>
          <Typography 
            color="primary.main" 
            variant="h2" 
            sx={{ fontWeight: 'bold', mb: 3}} 
            component="div"
          >
           Explore RPG Games on AgencyHill99
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Explore 3 groundbreaking RPG Games on the Fantom network, exclusively on AgencyHill99. Dive into related collections, including AAA RPG Games, Gaming DAOs, and RPG Game Studios, all in one place.<br/>
          Is your Web3 project missing from our list? <br/>Submit your game for a chance to be featured on the leading platform for Web3 gaming!<br/>
          Let’s showcase the finest NFTs and tokens in the Web3 space – only on AgencyHill99!
          </Typography>
          {/* <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            ...
          </Typography> */}
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ mb: 2, fontWeight: 700 }}
          >
            Let's get web3's best NFTs and Tokens!
            </Typography>
          <Stack
            direction="row"
            spacing={2}
          >
            <Button
              component={Link}
              to="/pre-sale"
              disableElevation 
              variant="contained" 
              endIcon={<ArrowForwardIcon />}>
              Get NFT
            </Button>
            <Button 
              component="a"
              href={""} // elo whitepaper url
              target="_blank" 
              rel="noopener noreferrer"
              endIcon={<ArrowDownwardIcon />}>
              Game Developer Whitepaper
            </Button>
          </Stack>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <img 
            src={logoArt}
            alt="AH99 Logo Alt" 
            width="550"
            height="310"
          />
        </Box>
      </Stack>
    </Container>
  );
}
 
export default HeroSection;
