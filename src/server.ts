import app from './app.js';

const PORT = Number(process.env.PORT) || 5000;

// Example of Top-Level Await for DB (Pseudo-code)
// await mongoose.connect(process.env.MONGO_URI);

const server = app.listen(PORT, () => {
  console.log(`✨ Server running in ESM mode on port ${PORT}`);
});

// Graceful Shutdown
process.on('unhandledRejection', (err: Error) => {
  console.error(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});