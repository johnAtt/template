import { Typography, Box, Divider } from '@mui/material';
import { labels } from "../details.json";
import { footerStyles } from '../theme';

const Footer = () => (
    <Box sx={footerStyles}>
      <Divider sx={{ mb: 2, bgcolor: 'primary.main' }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2 }}>
        <Typography variant="body2" color="text.secondary">{labels.footerPhotoCredit}</Typography>
        <Typography variant="body2" color="text.secondary">{labels.poweredBy}</Typography>
      </Box>
    </Box>
  );

  export default Footer