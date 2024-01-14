# Movie Database React App

This is a simple React application for managing favorite movies using the OMDb API.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)

## Features

- Search for movies using the OMDb API.
- Add movies to your favorites.
- View and manage your favorite movies.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following tools installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- Git [Download Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/movie-database-react.git
```

2. **Navigate to the project directory:**

```bash
cd movie-database-react
```

3. **Install dependencies:**

```bash
npm install
```

4. **Set up environment variables in:**
   Create a .env file in the root of your project and add the following variables:

```
REACT_APP_OMDB_API_KEY=123456
REACT_APP_SITE_TITLE=Movie Database
```

## Usage

1. **Start the development server:**

```bash
npm start
```

2. **Open your browser and go to http://localhost:3000.**
3. **Explore the Movie Database !**

## Folder Structure

```
movie-database/
│
├── public/              # Public files
│   ├── index.html
│   ├── faviicon.ico
│   ├── manifest.json
│   └── ...
├── src/                 # Source code
│   ├── components/      # React components, styles
│   ├── pages/           # Layout pages
│   ├── redux/           # Redux setup, slices, thunks
│   ├── services/        # Services to make requests to network, local storage
│   ├── App.ts
│   ├── index.ts
│   └── ...
└──
```

## Dependencies

- React
- Redux
- Material-UI
- React Router
- Sass
