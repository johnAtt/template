import { useRef, useEffect } from 'react';
import { Typography, Box, Button, Paper, Grid } from '@mui/material';
import { contactInfoStyles, mapContainerStyles } from '../theme';
import { phoneNumber, address, openingHours, labels } from "../details.json";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const ContactComponent = () => {
    const mapRef = useRef(null);
  
    useEffect(() : any => {
      if (mapRef.current) {
        const map = L.map(mapRef.current).setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        return () => map.remove();
      }
    }, []);
  
    return (
      <Box sx={mapContainerStyles}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 2, mb: 4 }}>{labels.contactUsTitle}</Typography>
        <div id="map" ref={mapRef} style={{ height: '400px', marginBottom: '40px' }}></div>
        <Grid container spacing={4} justifyContent="center">
            {[
              { title: labels.coordinatesTitle, content: phoneNumber, button: labels.callUsButton },
              { title: labels.addressTitle, content: address, button: labels.directionsButton },
              { 
                title: labels.openingHoursTitle, 
                content: Object.entries(openingHours).map(([day, hours]) => `${day}: ${hours}`).join('\n'),
                isList: true
              }
            ].map((info, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper elevation={3} sx={contactInfoStyles}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#2a9d8f', textAlign: 'left' }}>
                    {info.title}
                  </Typography>
                  {info.isList ? (
                    info.content.split('\n').map((line, i) => (
                      <Typography key={i} sx={{ textAlign: 'left', color: '#457b9d' }}>{line}</Typography>
                    ))
                  ) : (
                    <Typography sx={{ mb: 2, textAlign: 'left', color: '#457b9d' }}>{info.content}</Typography>
                  )}
                  {info.button && <Button variant="contained" color="secondary" sx={{ alignSelf: 'center' }}>
                    {info.button}
                  </Button>}
                </Paper>
              </Grid>
            ))}
          </Grid>
      </Box>
    );
  };

  export default ContactComponent