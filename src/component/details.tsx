import { Typography, Box, Divider } from '@mui/material';
import { detailsBoxStyles } from '../theme';
import { description, labels } from "../details.json";

const Details = () => (
  <Box sx={detailsBoxStyles}>
    <Divider sx={{ mb: 2, bgcolor: 'primary.main' }} />
    <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>{labels.aboutUsTitle}</Typography>
    <Typography variant="body1" sx={{ maxWidth: '60%', textAlign: 'justify', my: 2 }}>
        {description}
    </Typography>
  </Box>
);

export default Details;