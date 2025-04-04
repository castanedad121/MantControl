const express = require("express");
const router = require("./routes/index");
const server = express();

// Middleware para tener acceso sin seguridad (uso local):
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept , Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Middleware para manejar formato json (body):
server.use(express.json());
// Middleware para anteponerle "/student-monitoring" a las rutas:
server.use("/mant-control", router);

//server.use(cronJobs);

module.exports = server;
