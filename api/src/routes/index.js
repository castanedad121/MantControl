//! Handlers
const router = require("express").Router();
const { validateToken } = require("../functions/validateToken");
//Deployment
const getMain = require("../handlers/user/getMain");
const getTicketsHandler = require("../handlers/Ticket/getTicketsHandler");
//post
const postUserRegisterHandler = require("../handlers/user/postUserRegisterHandler");
const postLoginHandler = require("../handlers/user/postLoginHandler");
const postMenuHandler = require("../handlers/Menu/postMenuHandler");
const postRoleHandler = require("../handlers/Role/postRoleHandler");
const postAccessControlHandler = require("../handlers/AccessControl/postAccessControlHandler");
const postAnexoHandler = require("../handlers/Anexo/postAnexoHandler");
const postPositionJobHandler = require("../handlers/PositionJob/postPositionJobHandler");
const postAgendaHandler = require("../handlers/Agenda/postAgendaHandler");
const postDocumentWorkOrderManttoHandler = require("../handlers/DocumentWorkOrderMantto/postDocumentWorkOrderManttoHandler");
const postTicketHandler = require("../handlers/Ticket/postTicketHandler");
const postAgendaLegalHandler = require("../handlers/AgendaLegal/postAgendaLegalHandler");

//delete

const deleteUserHandler = require("../handlers/user/deleteUserHandler");
//put

const putUserHandler = require("../handlers/user/putUserHandler");
//get detail

const getUserHandler = require("../handlers/user/getUserHandler");
//get all
const getUsersHandler = require("../handlers/user/getUsersHandler");
const getAnexosHandler = require("../handlers/Anexo/getAnexosHandler");

//! Rutas
// Login
router.post("/login", postLoginHandler);

//Menus
router.post("/menu", validateToken, postMenuHandler);

//Role
router.post("/role", validateToken, postRoleHandler);

//AccessControl
router.post("/accesscontrol", validateToken, postAccessControlHandler);

// Users
router.post("/user", validateToken, postUserRegisterHandler);
router.delete("/user/:id", validateToken, deleteUserHandler);
router.put("/user/:id", validateToken, putUserHandler);
router.get("/user/:id", validateToken, getUserHandler);
router.get("/users", validateToken, getUsersHandler);

//Anexo
router.post("/anexo", validateToken, postAnexoHandler);
router.get("/anexos", validateToken, getAnexosHandler);

//PositionJob
router.post("/positionjob", validateToken, postPositionJobHandler);

//Agenda
router.post("/agenda", validateToken, postAgendaHandler);

//AgendaLegal
router.post("/agendalegal", validateToken, postAgendaLegalHandler);

//DocumentWorkOrderMantto
router.post(
  "/documentworkordermantto",
  validateToken,
  postDocumentWorkOrderManttoHandler
);

//Ticket
router.post("/ticket", validateToken, postTicketHandler);
router.get("/tickets", validateToken, getTicketsHandler);

// Otras:
router.get("/", getMain);
module.exports = router;
