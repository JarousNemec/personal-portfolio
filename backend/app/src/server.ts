import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// GET endpoint
app.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello, world!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});