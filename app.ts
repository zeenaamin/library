import express from 'express';
import routes from './routes';
import { initializeData } from './data';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use(routes);

// Initialize sample data
initializeData();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});