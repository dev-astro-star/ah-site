import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import cubes from '../../assets/images/cubes.svg';

// Need to change later features of AH99 projects
const features = [
  {
    title: "What You Get",
    description: "When you play and complete missions in our game, you’ll earn $AH99 as in-game rewards. Whether you're a regular player or an investor in our game, you can unlock even more exclusive rewards. This means you're not just playing for fun—you’re also earning cool bonuses along the way!",
  },
  {
    title: "Extra Services",
    description: "We’re constantly updating our game to bring you new features and services, making $AH99 even more valuable. Stay tuned for future updates and exclusive in-game perks designed to enhance your gaming experience!",
  },

]

const FeaturesSection = () => {
  return (
    <Box sx={{bgcolor: 'neutral.main', py: 7, borderTop: 1, borderColor: "grey.100" }}>
      <Container>
        <Box sx={{maxWidth: '500px'}}>
          <Typography 
            variant="body1" 
            color="primary.main" 
            sx={{ mb: 1, fontWeight: 700 }}
          >
            Our main features
          </Typography>
          <sub><span sx={{color:'#1cac1d'}}> Earn rewards while you play!</span></sub>
          <Typography
            color="text.primary"
            variant="h4" 
            sx={{ fontWeight: 700, mb: 5 }} 
            component="div"
          >
           Cool Reward System for Players
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {features.map((f, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Stack direction="row" spacing={2}>
                <Box sx={{minWidth: 36}}>
                  <img
                    src={cubes}
                    width="36"
                    height="36"
                    alt="cubes"
                  />
                </Box>
                <Box>
                  <Typography
                    variant="body" 
                    component="div"
                    color="text.primary"
                    sx={{fontWeight: 700, fontSize: '0.875rem'}}
                  >
                  {f.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{fontSize: '0.875rem'}}>
                    {f.description}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
 
export default FeaturesSection;
