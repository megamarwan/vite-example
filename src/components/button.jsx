// This file defines a functional React component that uses Material UI (MUI) for custom theming.

import React from 'react'; // Imports the React library, required for all React components.
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Imports:
                                                                 // 1. 'createTheme': A function to generate a custom MUI theme object.
                                                                 // 2. 'ThemeProvider': An MUI component that applies the custom theme to its children.
import Button from '@mui/material/Button'; // Imports the pre-styled MUI Button component.

// Variable: 'theme' is a constant variable holding the custom theme object.
//createTheme function is called to create a theme with specific configurations.
const theme = createTheme({
  palette: { // Object property: Defines the application's color palette configuration.
    primary: { // Object property: Defines the primary color (used for main actions and components).
      main: '#1976d2', // Object property: Sets the 'main' hue of the primary color to a specific hex code (Material Blue).
    }, // Closes the primary color object.
  }, // Closes the palette object.
}); // Closes the custom theme configuration and the createTheme() function call.

// Function: Defines the main functional component of the file.
function App() {
  return (
    // Keyword: Starts the JSX return statement.
    /* JSX Element: Renders the ThemeProvider component. 
       It passes the custom 'theme' object as a prop,
       making the defined colors available via context to all components inside. */
    <ThemeProvider theme={theme}>
      {/* JSX Element: Renders a standard HTML div element. */}
      <div style={{ padding: '20px' }}>
        /* JSX Element: Renders the MUI Button component.
           - variant="contained": Makes the button a solid, filled rectangle.
           - color="primary": Instructs the button to use the custom 'primary' color defined in the theme object. */
        <Button variant="contained" color="primary">
          Themed Button /* String: The text content displayed inside the Button component. */
        </Button>
      </div>
    </ThemeProvider>
  ); // Closes the return statement.
} // Closes the App function.

// Keyword: Exports the App component as the default export, making it available for import in other files.
export default App;