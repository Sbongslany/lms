const http = require('http');
const app = require('./app/app');

const PORT = process.env.PORT || 2024;

// // Middleware
// app.use(morgan("dev"))

/// server
const server = http.createServer(app)
server.listen(PORT, console.log(`Server is running on port ${PORT}`))
