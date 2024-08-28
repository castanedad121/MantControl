// Definición de modelos:
const { conn } = require("./DB_connection");
const UserModel = require("./models/User");
const RoleModel = require("./models/Role");
const AccessControlModel = require("./models/AccessControl");
const MenuModel = require("./models/Menu");
const AnexoModel = require("./models/Anexo");
const PositionJobModel = require("./models/PositionJob");
const AgendaModel = require("./models/Agenda");
const DocumentWorkOrderManttoModel = require("./models/DocumentWorkOrderMantto");
const TicketModel = require("./models/Ticket");
const AgendaLegalModel = require("./models/AgendaLegal");

UserModel(conn);
RoleModel(conn);
AccessControlModel(conn);
MenuModel(conn);
AnexoModel(conn);
PositionJobModel(conn);
AgendaModel(conn);
DocumentWorkOrderManttoModel(conn);
TicketModel(conn);
AgendaLegalModel(conn);

// Relacionar modelos:
const {
  User,
  Role,
  Menu,
  AccessControl,
  Anexo,
  PositionJob,
  Agenda,
  DocumentWorkOrderMantto,
  Ticket,
  AgendaLegal,
} = conn.models;

// Relaciones:
// belongsTo: establece una relación de pertenencia entre dos modelos, donde un modelo "pertenece a" otro.
// hasOne: establece una relación uno a uno entre dos modelos.
// hasMany: establece una relación uno a muchos entre dos modelos.
// belongsToMany: establece una relación muchos a muchos entre dos modelos.

// Realacion entre role y menu con sus respectivos permissions
Role.belongsToMany(Menu, { through: AccessControl });
Menu.belongsToMany(Role, { through: AccessControl });

AccessControl.belongsTo(Role);
AccessControl.belongsTo(Menu);

// Role pertenece a un User
User.belongsTo(Role);
User.hasOne(Agenda);
Agenda.hasOne(User);

// PositionJob(positionFather) pertenece a PotionJob
PositionJob.belongsTo(PositionJob, { as: "PositionFather" });

//PositionJob y Anexo(type) pertenecen a Agenda
Agenda.belongsTo(PositionJob);
Agenda.belongsTo(Anexo, { as: "AnexoType" });
Agenda.belongsTo(AgendaLegal);
AgendaLegal.belongsTo(Anexo, { as: "AnexoType" });

//Agenda(TechnicalSupport), Anexo(type) y Anexo(Category) pertenecen a DocumentWorkOrderManttoModel
DocumentWorkOrderMantto.belongsTo(Agenda, { as: "AgendaTechnicalSupport" });
DocumentWorkOrderMantto.belongsTo(Anexo, { as: "AnexoType" });
DocumentWorkOrderMantto.belongsTo(Anexo, { as: "AnexoCategory" });

//Muchos Agenda(PersonRequest), Agenda(EnterpriseRequest), DocumentWorkOrderMantto(DocWorkOrder) pertenecen a Ticket
Ticket.belongsTo(Agenda, { as: "PersonRequest" });
Ticket.belongsTo(AgendaLegal, { as: "EnterpriseRequest" });
Ticket.belongsTo(DocumentWorkOrderMantto, { as: "DocWorkOrder" });
Ticket.belongsTo(User, { as: "UserCreation" });
Ticket.belongsTo(User, { as: "UserUpgrade" });
Ticket.belongsTo(Anexo, { as: "AnexoType" });

//
module.exports = {
  User,
  Role,
  Menu,
  AccessControl,
  Anexo,
  PositionJob,
  Agenda,
  AgendaLegal,
  DocumentWorkOrderMantto,
  Ticket,
};
