import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const HeroSection = () => {
  return (
    <Container className="fadeInUp">
      <Box sx={{maxWidth: "800px", py: 5, my: 5, mx: 'auto'}}>
        <Typography 
          variant="h5"
          color="primary.main" 
          sx={{ mb: 1, fontWeight: 'bold', textAlign: 'center' }}
        >
          About us
        </Typography>
        <Typography 
          color="text.primary" 
          variant="h4"
          sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }} 
          component="div"
        >
          Cool reward system with $AH99 inside our Web3 Game Playing business
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 1, textAlign: 'center' }}>
          We are building new reward system with our $AH99, please take part in our reward system and invest and touch with your hand now.
        </Typography>
      </Box>
    </Container>
  );
}
 
export default HeroSection;
