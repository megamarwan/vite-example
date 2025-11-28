import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CurvedLoop from './curved';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#f13a0cff',
    },
    secondary: {
      main: '#f91212ff',
    },
    background: {
      default: '#f4f4f4',
    },
  },
});

function Dashboard() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Corrected function to handle navigation
  const handleHomeClick = () => {
    console.log('Home button clicked, navigating...');
    // In a real application, you'd use a routing library like react-router-dom's useNavigate
    // For simple navigation or full-page reload:
    window.location.href = './hi.html'; 
  };

  const drawerItems = ['Home', 'About', 'Contact', 'Products', 'More Info'];

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar style={{ position: 'absolute' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Biznas</Typography>
          </Toolbar>
        </AppBar>

        <Drawer open={open} onClose={toggleDrawer}>
          {/* Add a div for padding/spacing if desired */}
          <div style={{ width: 250 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
            <List>
              {drawerItems.map((text) => (
                <ListItem
                  button
                  key={text}
                  onClick={() => {
                    if (text === 'Home') {
                      handleHomeClick();
                    } 
                    if (text === 'About') {
                      handleHomeClick();
                    } 
                  }}
                >
                  <ListItemIcon>
                    {/* Explicitly use HomeIcon for Home, InfoIcon for others */}
                    {text === 'Home' ? <HomeIcon /> : <InfoIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>

        <main style={{ flexGrow: 1, padding: '64px 20px' }}>
          {/* Main content */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Innovation</Typography>
                  <Typography variant="body2" color="textSecondary">
                    <CurvedLoop marqueeText="Welcome to Biznas" />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Pioneers</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    More Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Technology</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default Dashboard;