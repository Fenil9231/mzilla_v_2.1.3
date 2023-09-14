# Swapi Deshbord Project

- This project is devloped using StarWars (SWAPI_API).
- This project is a web-based application for managing and displaying starwar Characters,Vehicles,Starships,Planets,species,Films etc. Below, you'll find details about the project's structure, functionality, and key utility files.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Utility Functions](#utility-functions)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

The Moviezilla web application designed to help users to view swapi API data. It includes various components and features for interacting with swapi starwar's api data.

## Features

Key features and functionalities of the Resume Management Project include:

- Displaying a carousel of images on the home page.
- Fetching and displaying data from an external API.
- Handling loading and error states for data fetching.
- Displaying detailed information about a specific resource.
- Displaying a list of resources with pagination support.
- Including a footer with copyright information and a link to your LinkedIn profile.
- Showing the current version of the application.

## Technologies Used

The project is built using the following technologies:

- React for the frontend user interface.
- React Router for handling routing and navigation.
- Bootstrap for styling the components.
- Axios for making HTTP requests to an external API.
- Lodash for utility functions.
- Zustand for state management.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Fenil9231/mzilla_v_2.1.3.git

2. Navigate to the project directory:
   ```bash
   cd mzilla_v_2.1.3
3. Install dependencies:
    ```bash
    npm install
4. Start the application:
    ```bash
    npm start
5. Access the application in your web browser at http://localhost:3000

## Usage
Visit the application in your web browser.
Explore the different components and features, including the carousel, resource lists, and resource details.
Experience data fetching and pagination in action.
Check the footer for copyright information and a link to your LinkedIn profile.
View the current version of the application.


## Utility Functions
helper.js
This file (helper.js) contains utility functions used throughout the project. Some of the key functions include:

getLoadingState: Returns an object representing a loading state.
getErrorState: Returns an object representing an error state with an optional error message.
getSuccessState: Returns an object representing a success state with data.
getAxiosErrorMessage: Extracts error messages from Axios error responses.
getUniqResourceIdsFromRecords: Extracts unique resource IDs from a list of records.
api.js
This file (api.js) contains functions for making API requests using Axios. The key functions include:

getActions: Returns functions for fetching resource lists and resource instances. It also handles loading, error states, and data updates.

## Contributing
Contributions to this project are welcome. If you'd like to contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature:
    ```bash
    git checkout -b feature/new-feature

3. Commit your changes:
    ```bash
    git commit -m "Add new feature"

4. Push your branch to your fork:
    ```bash
    git push origin feature/new-feature

5. Open a pull request to the main repository.


## Contact
If you have questions or feedback, feel free to reach out:

- GitHub: https://github.com/Fenil9231
- LinkedIn: https://www.linkedin.com/in/fenil-kothiya-45327a270/
- Email: fenil.kothiya88@gmail.com

