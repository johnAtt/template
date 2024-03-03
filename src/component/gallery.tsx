import { Typography, Box, Divider, Grid } from '@mui/material';
import { galleryGridStyles } from '../theme';
import { images, labels } from "../details.json";

const Gallery = () => (
    <Box sx={galleryGridStyles}>
      <Divider sx={{ mb: 2, bgcolor: 'primary.main' }} />
      <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mt: 2, mb: 3 }}>{labels.galleryTitle}</Typography>
      <Grid container spacing={2} justifyContent="center">
        {images.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <img src={img} alt={`Gallery image ${index + 1}`} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  export default Gallery