const express = require('express');
const bodyParser = require('body-parser');
// Declaraciones iniciales ////////////////////////////
const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
// Static ///////////////////////////////////////
app.use(express.static(__dirname + '/public'));
// Static ///////////////////////////////////////
// Declaraciones iniciales ////////////////////////////







// Enrutamiento //
app.use("/", require("./routes"));
// Enrutamiento //






//puerto heroku ////////////////////////////////////////////////////
// port es igual a el puerto que heroku ha configurado.
let port = process.env.PORT;
// si no han configurado el puerto o el puerto es una cadena vacía
if (port == null || port == "") {
  // entonces usaremos el puerto 3000
  port = 3000;
}
app.listen(port, function() {
    console.log("Server started on port 3000");
});
//puerto heroku ////////////////////////////////////////////////////