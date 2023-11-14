//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = async (req, res) => {
  res.status(200).json({ message: "Get all Contacts" });
};

//@desc Create a contact
//@route POST /api/contacts
//@access public
const createContact = async (req, res) => {
  console.log("The request of the body is: ", req.body);
  const{name, email, phone} = req.body;
  if(!name || !email || !phone){
    res.status(404)
    throw new Error("All fields are mandatory !!");
  }
  res.status(201).json({ message: "Creates a Contact" });
};

//@desc Get a contact
//@route GET /api/contacts/:id
//@access public
const getContact = async (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
};

//@desc Updates a contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = async (req, res) => {
  res.status(200).json({ message: `Updates the contact for ${req.params.id}` });
};

//@desc Deletes a contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = async (req, res) => {
  res.status(200).json({ message: `Deletes the contact for ${req.params.id}` });
};

module.exports = {
  getContact,
  createContact,
  getContacts,
  updateContact,
  deleteContact,
};
