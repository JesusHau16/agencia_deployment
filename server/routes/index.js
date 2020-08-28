const express = require('express');
const router = express.Router();

// Importar modelos
const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

// Importar Controladores
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function(){
    // Aqui van a estar todas las rutas
    router.get('/',homeController.consultasHomePage);

    router.get('/nosotros', nosotrosController.infoNosotros);

    router.get('/viajes', viajesController.mostrarViajes);

    router.get('/viajes/:id', viajesController.mostrarViaje);

    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);

    // Cuando se llena el formulario
    router.post('/testimoniales', testimonialesController.agregarTestimonial);
    
    return router;
}