// Entry point file (e.g., main.jsx or index.js) - This sets up the React application.

import { StrictMode } from 'react' // Import the 'StrictMode' object, a wrapper component that enables extra runtime checks in development mode.
import { createRoot } from 'react-dom/client' // Import the 'createRoot' function, which is the modern React 18+ method for initializing the root of a React application.
import './index.css' // Import the application's main CSS file. This is a file/module import that applies global styles.
import ClickCounter from './components/conter.jsx' // Import the 'ClickCounter' component (a function/class representing a UI element). It is currently unused.
import Header from './components/Header.jsx' // Import the 'Header' component (a function/class component).
import Navigation from './components/navbar.jsx' // Import the 'Navigation' component (a function/class component).
import RouteComponent from './components/route.jsx' // Import the 'RouteComponent' (a function/class component), expected to contain the application's routing logic.
import App from './components/button.jsx' // Import the 'App' component (a function/class component). It is currently unused.
import Dashboard from './components/dashboard.jsx' // Import the 'Dashboard' component (a function/class component).
import PokemonFetch from './components/pokeapi.jsx' // Import the 'PokemonFetch' component (a function/class component).

// Function Call: Initializes the React root and renders the application structure.
createRoot(document.getElementById('root')).render(
// Function Call: Calls the imported 'createRoot' function, passing the DOM element with id 'root' (the mount point) as the argument, and then calls the '.render()' method on the resulting root object.
 <StrictMode> // JSX Element: Opens the StrictMode wrapper component.
<Dashboard/> 
<RouteComponent/> 
<PokemonFetch/> // Renders the 'RouteComponent', which likely contains the routing logic for the application.
<Header />// Renders the 'Header' component at the top level of the application.
<App/>
 </StrictMode>, // JSX Element: Closes the StrictMode wrapper component.
) // Syntax: Closes the argument list for the .render() function call.

