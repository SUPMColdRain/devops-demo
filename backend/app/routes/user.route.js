module.exports = app => {
    const router = require("express").Router();
    const user = require("../controllers/user.controller.js");

    // Create a new Tutorial
    router.post("/", user.create);

    // Retrieve all Tutorials
    router.get("/", user.findAll);

    // Retrieve all published Tutorials
    router.get("/admin", user.findAllAdmin);

    // Retrieve a single Tutorial with id
    router.get("/:username", user.findOne);

    // Update a Tutorial with id
    router.put("/:username", user.update);

    // Delete a Tutorial with id
    router.delete("/:username", user.delete);

    app.use('/api/v1/admin/userConfig', router);
};