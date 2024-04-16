# NASA Gallery

## Overview
This project is a gallery that displays images from the NASA API, along with the NASA Picture of the Day. It's built with React, TypeScript, Axios for making HTTP requests, and styled using Tailwind CSS.

## Features
- Displays a gallery of images related to a specific search term (default is "nebula").
- Shows the NASA Picture of the Day.
- Responsive navigation bar with a toggle for mobile view.

## Components
- `Hero`: This component fetches images from the NASA API based on the search term and displays them in a grid layout. If the images are still loading, it shows a loading message.
- `Pod`: This component fetches and displays the NASA Picture of the Day. If the media type of the picture of the day is a video, it embeds the video in the page. Otherwise, it displays the image.
- `Navbar`: This component provides a responsive navigation bar. It includes a toggle for mobile view.
- `HomePage`: This component renders the `Hero` component.
- `PodPage`: This component renders the `Pod` component.
- `App`: This component sets up the routes for the application using `react-router-dom`.

## Setup
1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Start the development server with `npm start`.
4. Open http://localhost:3000 to view it in the browser.

## Dependencies
- React
- TypeScript
- Axios
- Tailwind CSS

Please note: You'll need to provide your own NASA API key to fetch the images and the Picture of the Day.

## Future Improvements
- Add pagination or infinite scroll to load more images.
- Allow users to change the search term.
- Implement a search bar in the navigation bar.
