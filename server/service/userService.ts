import {Request, Response} from "express";
import User from "../models/User";
import * as bcrypt from 'bcryptjs'
import Role from "../models/Role";
import {Role as RoleType, UserDto} from "../types/User"
import {Error} from "mongoose";
import jwt from 'jsonwebtoken';
import UserDao from "../models/User";

export const signUp = (req: Request, res: Response) => {
    const secret = process.env.SECRET || "Hello_World"
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });

    user.save((err, user) => {
        if (err) {
            res.status(500).send({message: err});
            return;
        }

        Role.findOne({name: "user"}, (err: Error, role: RoleType) => {
            if (err) {
                res.status(500).send({message: err});
                return;
            }
            user.roles = [role._id];
            user.save(err => {
                if (err) {
                    res.status(500).send({message: err});
                    return;
                }

                const token = jwt.sign({id: user.id}, secret, {
                    expiresIn: 86400 // 24 hours
                });

                res.send({
                    message: "User was registered successfully!",
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    roles: ["ROLE_USER"],
                    accessToken: token
                });
            });
        });
    });
};

export const signIn = (req: Request, res: Response) => {
    const secret = process.env.SECRET || "Hello_World"
    User.findOne({
        username: req.body.username
    })
        .populate("roles")
        .exec((err, user) => {
            if (err) {
                res.status(500).send({message: err});
                return;
            }

            if (!user) {
                return res.status(404).send({message: "User Not found."});
            }

            const passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            const token = jwt.sign({id: user.id}, secret, {
                expiresIn: 86400 // 24 hours
            });

            const authorities = [];

            for (let i = 0; i < user.roles.length; i++) {
                authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
            }
            res.status(200).send({
                id: user._id,
                username: user.username,
                email: user.email,
                roles: authorities,
                accessToken: token
            });
        });
};

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserDao.find().populate("roles").exec();
        const userResponse = users.map(user => {
            return {
                username: user.username,
                email: user.email,
                roles: user.roles
            } as UserDto
        })
        res.status(200).json({users: userResponse})
    } catch (e) {
        res.status(500).json({message: "Could not get users", error: e.toString()})
    }
}