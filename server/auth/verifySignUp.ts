import User from "../models/User";
import {NextFunction, Request, Response} from "express";
import RoleDao from "../models/Role";


export const checkDuplicateUsernameOrEmail = (req: Request, res: Response, next: NextFunction) => {
    // Username
    User.findOne({
        username: req.body.username
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (user) {
            res.status(400).send({ message: "Failed! Username is already in use!" });
            return;
        }

        // Email
        User.findOne({
            email: req.body.email
        }).exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (user) {
                res.status(400).send({ message: "Failed! Email is already in use!" });
                return;
            }

            next();
        });
    });
};

export const checkRolesExisted = async (req: Request, res: Response, next: NextFunction) => {
    if (req.body.roles) {
        const roles = await RoleDao.find();
        for (const role in roles) {
            if (!req.body.roles.includes(roles[role].name)) {
                res.status(400).send({
                    message: `Failed! Role ${roles[role]} does not exist!`
                });
                return;
            }
        }
    }

    next();
};