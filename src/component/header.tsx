import { useState } from 'react';
import { company } from "../details.json";
import { AppBar, Toolbar, Typography, IconButton, Box, CssBaseline, List, ListItem, ListItemText, Button } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, Phone as PhoneIcon, Directions as DirectionsIcon } from '@mui/icons-material';
import { navStyles } from '../theme';
import { sections, labels } from "../details.json";


function ResponsiveAppBarWithCustomDrawer({ onToggle, onNavigate }: any) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  
    const handleNavigate = (section: any) => {
      toggleDrawer();
      onNavigate(section);
    };
  
    return (
      <>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{ mr: 2, ml: '20px' }}>
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1, ml: '20px' }}>{company}</Typography>
            <Box sx={{ display: 'flex', gap: 2, mr: '20px' }}>
              <Button color="inherit" startIcon={<PhoneIcon />}>{labels.callUsButton}</Button>
              <Button color="inherit" startIcon={<DirectionsIcon />}>{labels.directionsButton}</Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav" sx={navStyles(drawerOpen)}>
          <List>
            {Object.values(sections).map((text) => (
              <ListItem button key={text} onClick={() => handleNavigate(text)}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </>
    );
  }

  export default ResponsiveAppBarWithCustomDrawer;