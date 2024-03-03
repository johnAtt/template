import { Typography, Box, Button, Container
} from '@mui/material';
import { Phone as PhoneIcon } from '@mui/icons-material';
import sampleImage from '../../public/home.jpg';
import { homeBoxStyles } from '../theme';
import { company, subtitle, labels } from "../details.json";

const Home = () => (
    <Container sx={{ paddingTop: '10%', paddingBottom: '10%' }}>
      <Box sx={homeBoxStyles}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold' }}>{company}</Typography>
        <Typography variant="h6">{subtitle}</Typography>
        <Button variant="contained" color="secondary" startIcon={<PhoneIcon />} sx={{ mt: 1 }}>{labels.callUsButton}</Button>
        <Box component="img" sx={{ width: '65%', maxWidth: '100%', height: '500px', borderRadius: '12px' }} src={sampleImage} alt="Sample" />
      </Box>
    </Container>
  );

  export default Home