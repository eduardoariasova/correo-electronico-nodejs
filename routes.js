const router = require('express').Router();
const correoNotificacion = require('./functions/notificacionCorreo.js');
// Funciones //

// Funciones //


router.route("/")
.get(function(req, res){
    res.render("home");
});

router.route("/contacto")
.post(function(req, res){
    var nombre  = req.body.nombre;
    var email   = req.body.email;
    var mensaje = req.body.mensaje;

    var correoAdmin = "proyectos@pretwor.com";
    // Función de correo electrónico
    // Not # 0: correoNotificacion(cualNotificacion, nombre, email, mensaje)
    correoNotificacion(0, nombre, correoAdmin, mensaje); //
    // Not # 1: correoNotificacion(cualNotificacion, nombre, email, mensaje)
    correoNotificacion(1, nombre, email, mensaje); //
    // Función de correo electrónico

    res.render("gracias", {nombreUsuario: nombre});

});



module.exports = router;