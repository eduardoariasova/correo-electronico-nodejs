require('dotenv').config(); // solcitamos dotenv
const router = require('express').Router();
const correoNotificacion = require('./functions/notificacionCorreo.js');
const cron = require('node-cron');
//Solicitudes //


//Segundo plano 
cron.schedule('31 18 * * * ', () => {

    
    //FUNCIÓN CORREO
    correoNotificacion(2, "NA", process.env.EMAILENVIAR, "NA" );
    console.log('Correo enviado correctamente');
}, 
{
    scheduled: true,
    timezone: "America/Bogota"
});






router.route("/")
.get(function(req, res){
    res.render("home");
});

router.route("/contacto")
.post(function(req, res){
    var nombre  = req.body.nombre;
    var email   = req.body.email;
    var mensaje = req.body.mensaje;

    var correoAdmin = "";
    // Función de correo electrónico
    // Not # 0: correoNotificacion(cualNotificacion, nombre, email, mensaje)
    correoNotificacion(0, nombre, correoAdmin, mensaje); //
    // Not # 1: correoNotificacion(cualNotificacion, nombre, email, mensaje)
    correoNotificacion(1, nombre, email, mensaje); //
    // Función de correo electrónico

    res.render("gracias", {nombreUsuario: nombre});

});



module.exports = router;
