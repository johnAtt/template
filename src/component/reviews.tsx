import { Typography, Box, Button, Card, CardContent, Rating, Grid } from '@mui/material';
import {reviews, labels } from "../details.json";

const GoogleReviews = () => (
    <Box sx={{ my: 4, backgroundColor: 'white', p: 3, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom textAlign="center" sx={{ fontWeight: 'bold', mb: 3 }}>{labels.testimonialsTitle}</Typography>
      <Grid container spacing={2} justifyContent="center">
        {reviews.map((review, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3, backgroundColor: "#ffff" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'medium' }}>
                  {review.text}
                </Typography>
                <Rating name="read-only" value={review.rating} readOnly />
                <Typography sx={{ mt: 1.5, fontStyle: 'italic' }}>- {review.author}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 2 }}>
        <Button variant="outlined" color="primary" sx={{ fontWeight: 'bold' }}>{labels.writeReviewButton}</Button>
        <Button variant="contained" color="secondary" sx={{ fontWeight: 'bold' }}>{labels.learnMoreButton}</Button>
      </Box>
    </Box>
  );

  export default GoogleReviews