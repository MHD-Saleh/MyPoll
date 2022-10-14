//const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
var bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();

app.use(multer().any());

const connection = require("./dbconf");
const port = 3005;
var corsOptions = {
  origin: "*",
};

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors(corsOptions));
app.use(express.json());

app.listen(port, () => {
  console.log("app listening on port : " + port);
});

//SELECT * FROM `users` WHERE 1

app.get("/users", (req, res) => {
  connection.query("SELECT * FROM `users`", (error, result) => {
    if (error) {
      res.send("error to fetch businfo all records");
    } else {
      res.send(result);
    }
  });
});

app.get("/buses", (req, res) => {
  connection.query(
    "SELECT  businfo.id,businfo.number,businfo.type,businfo.passengerCount,compani.name FROM businfo,compani where businfo.company_id=compani.id",
    (error, result) => {
      if (error) {
        res.send("error to fetch businfo all records");
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/company", (req, res) => {
  connection.query("SELECT * FROM compani", (error, result) => {
    if (error) {
      res.send("error to fetch businfo all records");
    } else {
      res.send(result);
    }
  });
});

app.get("/trips", (req, res) => {
  connection.query(
    "select trips.id,trips.Jnumber,trips.date,trips.busNumber,businfo.type,trips.start,trips.dist,compani.name,trips.company_id  from trips,compani,businfo WHERE trips.company_id=compani.id AND trips.busNumber=businfo.number",
    (error, result) => {
      if (error) {
        res.send("error to fetch businfo all records");
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/addcompany", (req, res) => {
  const data = req.body;
  connection.query(
    "INSERT INTO compani SET ?",
    data,
    (error, result, fields) => {
      if (error) throw error;
      res.send(result);
    }
  );
});

app.post("/addbus", (req, res) => {
  const data = req.body;
  connection.query(
    "INSERT INTO businfo SET ?",
    data,
    (error, result, fields) => {
      if (error) throw error;
      res.send(result);
    }
  );
});

app.post("/addtrip", (req, res) => {
  const data = req.body;
  connection.query("INSERT INTO trips SET ?", data, (error, result, fields) => {
    if (error) throw error;
    res.send(result);
  });
});

app.put("/updateCompany/:id", (req, res) => {
  const data = req.body;
  const id = req.params.id;
  console.log(JSON.stringify(data));
  connection.query(
    "UPDATE compani SET ? where id =" + id,
    data,
    (error, result, fields) => {
      if (error) throw error;
      res.send(result);
    }
  );
});

app.put("/updatebus/:id", (req, res) => {
  const data = req.body;
  const id = req.params.id;
  console.log(JSON.stringify(data));
  connection.query(
    "UPDATE businfo SET ? where id =" + id,
    data,
    (error, result, fields) => {
      if (error) throw error;
      res.send(result);
    }
  );
});

app.delete("/deleteCompany/:id", (req, res) => {
  const id = req.params.id;
  connection.query("DELETE FROM compani WHERE id =" + id, (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});

app.delete("/deletebus/:id", (req, res) => {
  const id = req.params.id;
  connection.query("DELETE FROM businfo WHERE id =" + id, (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});

app.delete("/deletetrip/:id", (req, res) => {
  const id = req.params.id;
  connection.query("DELETE FROM trips WHERE id =" + id, (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});

/*
const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "buses",
  port: 3308,
});

app.get("/mysql", (req, res) => {
  con.connect((err) => {
    if (err) {
      console.log("Error connecting to Db" + err);
      return;
    }
    console.log("Connection established");
  });
  con.query("SELECT * FROM businfo", (err, rows) => {
    if (err) throw err;

    console.log("Data received from Db:");
    console.log(rows);
  });
  res.send("hello node this is home");
});



/*
app.get("/test", (req, res) => {
  sql.getdata();
  res.send("hello node");
});

app.get("/all", (req, res) => {
  sql.getdata_withQuery().then((result) => {
    res.send(result);
  });
});

app.get("/getall", (req, res) => {
  sql.getall();
  res.send("done!");
});


/*const server = http.createServer((req, res) => {
  res.write("hello node");
  res.end();
});

server.listen(port, (err) => {
  if (err) {
    console.log("something went wrong" + err);
  } else {
    console.log("server listening on port : " + port);
  }
});*/
