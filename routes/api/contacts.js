const express = require("express");
const router = express.Router();
const schemas = require("../../schemas/contacts");
const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../middlewares");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContactById);

router.delete("/:contactId", ctrl.deleteContactById);

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  ctrl.updateContactById
);

module.exports = router;
