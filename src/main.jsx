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
import NavbarMUI from './components/navbarMUI.jsx'

// Function Call: Initializes the React root and renders the application structure.
createRoot(document.getElementById('root')).render(
// Function Call: Calls the imported 'createRoot' function, passing the DOM element with id 'root' (the mount point) as the argument, and then calls the '.render()' method on the resulting root object.
 <StrictMode> 
<Dashboard/> 
<Navigation/>
<RouteComponent/> 
<PokemonFetch/>
<Header />

<<<<<<< HEAD
=======

>>>>>>> 67adff985b58dfe386b970056179f01828833e72
 </StrictMode>, // JSX Element: Closes the StrictMode wrapper component.
) // Syntax: Closes the argument list for the .render() function call.


/* 1 import all the different components(pieces of code) 
2 use the three functions creatRoot (from react which take an HTML element as an argument and mount the component on it),
 getElementById(from vanilla js to get the div with id root in index.html) 
 and render (from react to render the app inside the div with id root in index.html)
 rendering is converting code into dom elements that the browser can understand and display on the screen. 3 wrap everything inside StrictMode to help identify potential problems in the application during development. 
 finally call the render function to display the components on the web page. 
 The components imported at the top are used to build the user interface of the application. 
 The main.jsx file serves as the entry point for the React application, orchestrating how components are rendered and displayed in the browser.
 The React StrictMode is a development tool that helps identify potential problems in a React*/

 //testing commit change//