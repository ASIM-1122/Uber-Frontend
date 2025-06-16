import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import "./index.css"; // Import global CSS
import DriverProvider from './Context/DriverContext.jsx'; // Ensure correct import
import UserProvider from './Context/UserContext.jsx'; // Ensure correct import

// Remove StrictMode temporarily for debugging
createRoot(document.getElementById('root')).render(
  <DriverProvider>  {/* ✅ Use the correct provider */}
    <UserProvider>  {/* ✅ Ensure this is a provider, not just the context object */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </DriverProvider>
);
