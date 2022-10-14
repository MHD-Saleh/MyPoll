const config = {
  user: "root",
  password: "",
  server: "localhost",
  database: "buses",
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    trustServerCertificate: true,
    instancename: "",
  },
  port: 1433,
};

module.exports = config;

/*const config = {
  user: "sa",
  password: "sa12345",
  server: "localhost",
  database: "testdb",
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    trustServerCertificate: true,
    instancename: "",
  },
  port: 1433,
};

module.exports = config;
 */
