const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');


// get all contact
//route api/conatct
// acesss public

const getallcontact = asyncHandler(async (req, res)=>{
    const contacts =  await Contact.find();
    res.status(200).json(contacts)
});

// create contact
//route api/conatct
// acesss public

const createConatct =  asyncHandler(async(req, res)=>{
    console.log('the request body',req.body)
    const {name, phone, email} = req.body;
    if(!name || !phone || !email){
        res.status(400)
        throw new Error("all filed all mandatory")
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    })
    res.status(201).json(contact)
});


// get  contact
//route api/conatct/id
// acesss public

const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact ){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
  });
  

// update contact
//route api/conatct/id
// acesss public

const updateContact =  asyncHandler(async (req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );


    res.status(200).json(updatedContact)
});


// delete contact
//route api/conatct/id
// acesss public

const deleteContact =  asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    await Contact.findByIdAndRemove(
        req.params.id
    )
    res.status(200).json(contact)
});








module.exports = {getallcontact, createConatct, deleteContact, updateContact, getContact
}