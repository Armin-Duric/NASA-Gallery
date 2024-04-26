# NASA Gallery

## Overview
This project is a gallery that displays images from the NASA API, along with the NASA Picture of the Day. It's built with React, TypeScript, Axios for making HTTP requests, and styled using Tailwind CSS.

## Features
- Displays a gallery of images related to a specific search term (default is "nebula").
- Shows the NASA Picture of the Day.
- Responsive navigation bar with a toggle for mobile view.

## Components
- Hero: This component fetches images from the NASA API based on the search term and displays them in a grid layout.
- Pod: This component fetches and displays the NASA Picture of the Day. If the media type of the picture of the day is a video, it embeds the video in the page. Otherwise, it displays the image.
- Navbar: This component provides a responsive navigation bar. It includes a toggle for mobile view.
- HomePage: This component renders the Hero component as the home page.
- PodPage: This component renders the Pod component with /pod path.
- App: This component sets up the routes for the application using `react-router-dom`.

## Setup
1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Start the development server with `npm run dev`.
4. Open the local host with the default port number to view it in the browser.

## Dependencies
- React
- TypeScript
- Axios
- Tailwind CSS

Please note: You'll need to provide your own NASA API key to fetch the the Picture of the Day.

## Future Improvements
- Limit images display per page and add pagination option.
- Add option for the most searched images. 
