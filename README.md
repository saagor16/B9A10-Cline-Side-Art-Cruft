# Art And Cruft

**Live Site URL:** [Art and Cruft](https://new-artcraft.netlify.app/)

## Project Overview

Art And Cruft is a web application designed to showcase and manage art and craft items. It provides a centralized platform for users to explore various craft collections and for creators to showcase their own crafts.

## Features

- **User Authentication:** Secure registration, login, and logout functionalities.
- **Private Routes:** Access to adding new craft items and viewing personal collections is restricted to logged-in users.
- **Responsive Design:** Fully responsive across all devices for a seamless user experience.

## npm Packages Used

- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework.
- [Daisy UI](https://daisyui.com/): Tailwind CSS components.
- [React Helmet](https://www.npmjs.com/package/react-helmet): Manage document head.
- [React Toast](https://react-toast.com/): Notifications.
- [Mamba UI](https://mambaui.com/components): Tailwind components.
- [MongoDB Atlas](https://www.mongodb.com/atlas/database): Cloud-hosted MongoDB database.
- [React-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter): Typing animations.
- [React Awesome Reveal](https://www.npmjs.com/package/react-awesome-reveal): UI animations.

## Client Side

**GitHub Repository:** [Client Side](https://github.com/saagor16/B9A10-Cline-Side-Art-Cruft)

## Server Side

**GitHub Repository:** [Server Side](https://github.com/saagor16/B9A10-Server-Side-Art-Cruft)

## Installation and Setup Instructions

### Prerequisites

- Node.js
- npm or yarn
- MongoDB Atlas account

### Installation Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/saagor16/B9A10-Cline-Side-Art-Cruft.git
    git clone https://github.com/saagor16/B9A10-Server-Side-Art-Cruft.git
    ```

2. Navigate to the respective directories:
    ```bash
    cd B9A10-Cline-Side-Art-Cruft
    cd B9A10-Server-Side-Art-Cruft
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables in a `.env` file for the server:
    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_atlas_uri
    JWT_SECRET=your_jwt_secret
    ```

5. Start the client and server:
    ```bash
    npm start
    ```

## Usage

- Explore craft items in the All Art & Craft Items section without logging in.
- Log in to add new craft items and manage personal collections.
- View detailed information for each craft item.
