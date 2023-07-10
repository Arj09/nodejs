const express = require('express');
const { getallcontact, createConatct, getContact, updateContact, deleteContact } = require('../Controllers/contactController');
const router = express.Router();

router.route('/').get(getallcontact).post(createConatct)
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)



module.exports = router