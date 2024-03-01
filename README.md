# SnapJoy - Comprehensive Documentation

Welcome to SnapJoy! SnapJoy is an engaging photo-sharing application built with React and connected to the DRF_API server. This documentation provides comprehensive information to help you understand, set up, and contribute to the SnapJoy project.

## Overview

SnapJoy is a vibrant photo-sharing application where users can create accounts, upload photos, and engage with the community through likes and comments. The project is based on the Moments project from the CODE Institute, customized and seamlessly connected to the DRF_API server.

## Getting Started

Follow these steps to set up and run the SnapJoy React application.

### Prerequisites

Ensure you have Node.js installed on your machine. You can download it [here](https://nodejs.org/).

### Installation

1. Clone the SnapJoy repository:

   ```bash
   git clone https://github.com/lukaszglowacz/react-ci-project

2. Navigate to the project directory:

    ```bash
    cd snapjoy-react

3. Install dependencies:

    ```bash
    npm install

4. Configuration

    Update the API base URL in the src/api/axiosDefaults.js file to point to your DRF_API server:

    // src/api/axiosDefaults.js

    import axios from "axios";

    axios.defaults.baseURL = "https://your-drf-api-url.com";
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.withCredentials = true;

    export const axiosReq = axios.create();
    export const axiosRes = axios.create();

5. Running the aplication:

    ```bash
    npm start

    Visit http://localhost:3000 in your browser to explore SnapJoy.

### Features

- User Authentication: Create an account and log in to start sharing your moments.
- Photo Upload: Share your favorite photos with the SnapJoy community.
- Interactivity: Allow the community to engage by liking and commenting on your photos.

### Connectivity with DRF_API

    SnapJoy is seamlessly connected to the DRF_API server. Ensure that the DRF_API server is running and properly configured according to the instructions in its README.md file.

### Credentials
    The project is built based on the Moments application template created by Code Institute.

### Contributing

    Contributions to SnapJoy are welcome! Feel free to submit issues or pull requests to enhance the application's functionality and usability.