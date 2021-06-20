module.exports = app => {
    const router = require("express").Router();
    const user = require("../controllers/user.controller.js");

    router.post("/", user.canLogin);

    app.use('/api/v1/auth/admin_login', router);
};