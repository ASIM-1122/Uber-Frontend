# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Collecting workspace informationHere’s a clear structure and content suggestion for your utility (`utils`) and README files:

---

**1. Utility File Example**

You can create a utility file for common helpers, such as API requests, token management, or form validation. Here’s a simple example for token management:

````js
// Save token to localStorage
export function saveToken(token) {
  localStorage.setItem('token', token);
}

// Get token from localStorage
export function getToken() {
  return localStorage.getItem('token');
}

// Remove token from localStorage
export function removeToken() {
  localStorage.removeItem('token');
}
````

You can import and use these helpers in your components, e.g.:
```js
import { saveToken, getToken, removeToken } from '../utils/token';
```

---

**2. README File Content Example**

Here’s a template for your README.md file in the FrontEnd directory:

````md
# Uber Clone Frontend

This is the frontend for the Uber Clone project, built with React, Vite, and Tailwind CSS.

## Project Structure

- `src/Pages/` — All main page components (Login, Register, Home, etc.)
- `src/Context/` — React Context for User and Driver state management
- `src/utils/` — Utility/helper functions (e.g., token management)
- `public/` — Static assets (images, etc.)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
cd FrontEnd
npm install
```

### Running the App

```sh
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Building for Production

```sh
npm run build
```

### Linting

```sh
npm run lint
```

## Environment Variables

Create a `.env` file in the `FrontEnd/` directory with:

```
VITE_BASE_URL=http://localhost:3000
```

Adjust the URL to match your backend server.

## Utilities

Common utility functions are in [`src/utils/`](src/utils/). For example, [`token.js`](src/utils/token.js) handles saving, retrieving, and removing JWT tokens from localStorage.

## API Endpoints

See the [`BackEnd/README.md`](../BackEnd/README.md) for full API documentation.

---

## License

MIT
````

---


# Uber-Frontend

// Save token to localStorage
export function saveToken(token) {
  localStorage.setItem('token', token);
}

// Get token from localStorage
export function getToken() {
  return localStorage.getItem('token');
}

// Remove token from localStorage
export function removeToken() {
  localStorage.removeItem('token');
}