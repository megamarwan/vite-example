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

//const drawerWidth = 240;

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#f13a0cff', // Change this to your desired color
    },
    secondary: {
      main: '#f91212ff', // Change this to your desired color
    },
    background: {
      default: '#f4f4f4', // Change this to your desired background color
    },
  },
});

function Dashboard() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Biznas</Typography>
          </Toolbar>
        </AppBar>
        
        <Drawer open={open} onClose={toggleDrawer}>
          <List>
            {['Home', 'About'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <InfoIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <main style={{ flexGrow: 1, padding: '64px 20px' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Card 1</Typography>
                  <Typography variant="body2" color="textSecondary">
                    <CurvedLoop marqueeText="Welcome    to     Biznas     " />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* Additional cards can be added here */}
          </Grid>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default Dashboard;