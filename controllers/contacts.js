const {
  listContacts,
  getById,
  removeContact,
  addContact,
  updateContact,
} = require("../models/contacts");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const result = await listContacts();
  res.json(result);
};

const getContactById = async (req, res) => {
  const result = await getById(req.params.contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ result });
};

const addContactById = async (req, res) => {
  const result = await addContact(req.body);
  res.status(201).json(result);
};

const deleteContactById = async (req, res) => {
  const result = await removeContact(req.params.contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "Delete success",
  });
};
const updateContactById = async (req, res) => {
  const result = await updateContact(req.params.contactId, req.body);

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getContactById: ctrlWrapper(getContactById),
  addContactById: ctrlWrapper(addContactById),
  updateContactById: ctrlWrapper(updateContactById),
  deleteContactById: ctrlWrapper(deleteContactById),
};
