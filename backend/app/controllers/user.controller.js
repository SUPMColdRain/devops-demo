const db = require("../models");
const User = db.user;

/**
 * 新增用户
 * @param req
 * @param res
 */
exports.create = (req, res) => {
    // 有效请求
    console.log(req.body)
    if (!req.body.username) {
        res.status(400).send({
            message: "内容不能为空！"
        });
        return;
    }

    // 新增用户
    const user = {
        s_username: req.body.username,
        s_password: req.body.password,
        s_admin: req.body.admin,
    };

    // 将用户存入数据库
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
};

/**
 * 根据条件查询用户
 * @param req
 * @param res
 */
exports.findAll = (req, res) => {
    // const s_username = req.query.username;
    // let condition = s_username ? {s_username: {[Op.like]: `%${s_username}%`}} : null;

    User.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving user."
            });
        });
};

/**
 * 根据username查询单个用户
 * @param req
 * @param res
 */
exports.findOne = (req, res) => {
    const s_username = req.params.username;

    User.findOne({where: {s_username: s_username}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with username = " + s_username
            });
        });
};

/**
 * 根据username更新用户
 * @param req
 * @param res
 */
exports.update = (req, res) => {
    const s_username = req.params.username;
    User.update({
        s_username: req.body.username,
        s_password: req.body.password,
        s_admin: req.body.admin
    }, {where: {s_username: s_username}})
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with username = ${s_username}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with s_username = " + s_username
            });
        });
};

/**
 * 根据username删除用户
 * @param req
 * @param res
 */
exports.delete = (req, res) => {
    const s_username = req.params.username;

    User.destroy({where: {s_username: s_username}})
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with username = ${s_username}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with s_username = " + s_username
            });
        });
};

/**
 * 根据s_admin = true查找所有用户
 * @param req
 * @param res
 */
exports.findAllAdmin = (req, res) => {
    User.findAll({where: {s_admin: 1}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving user."
            });
        });
};

/**
 * 用户登录
 * @param req
 * @param res
 */
exports.canLogin = (req, res) => {
    const s_username = req.body.username;
    const s_password = req.body.password;

    User.findOne({where: {s_username: s_username}})
        .then(data => {
            if (data.s_password && data.s_password === s_password && data.s_admin === 1) {
                res.status(200).send({
                    message: s_username + "登录成功"
                });
            } else res.status(500).send({
                message: s_username + "密码错误"
            });
        })
}
