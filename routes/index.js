const express = require('express');
const router = express.Router();
const Contact = require('../model/contact');

router.get('/', async(req, res) => {
    const contactos = await Contact.find().sort('nombre');

    res.render('index', {
        contactos
    });

});
router.post('/add', async(req, res) => {
    const contact = new Contact(req.body);
    await contact.save();


    res.redirect('/');

});

router.post('/edit/:id', async(req, res) => {
    let { id } = req.params;
    const contacto = await Contact.findById(id);
    console.log("Se ha encontrado el contacto con el id: " + id);
    await Contact.update({ _id: id }, req.body);
    res.redirect('/');

});

router.get('/del/:id', async(req, res) => {
    let { id } = req.params;
    await Contact.remove({ _id: id });
    console.log("Se ha borrado el contacto con el id: " + id);

    res.redirect('/');
});



module.exports = router;