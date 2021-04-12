import {NextFunction, Request, Response} from "express";
import jwt from 'jsonwebtoken';
import User from "../models/User";
import Role from "../models/Role";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const secret =  process.env.SECRET || "Hello_World"
    let token = req.headers["authorization"] as string;
    const bearerMark = token?.split(" ")[0]
    token = token?.split(" ")[1]

    if (!token) {
        return res.status(403).send({message: "No token provided!"});
    }

    jwt.verify(token as string, secret, (err, decoded) => {
        if (bearerMark !== "Bearer") {
            return res.status(401).send({message: "No Bearer mark included in authorization signature"});
        }
        if (err) {
            return res.status(401).send({message: "Unauthorized!"});
        }
        // @ts-ignore
        req.userId = decoded.id;
        next();
    });
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore getting userId from verification middleware
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({message: err});
            return;
        }
        if (user) {

            Role.find(
                {
                    _id: {$in: user.roles}
                },
                (err, roles) => {
                    if (err) {
                        res.status(500).send({message: err});
                        return;
                    }

                    for (let i = 0; i < roles.length; i++) {
                        if (roles[i].name === "admin") {
                            next();
                            return;
                        }
                    }

                    res.status(403).send({message: "Require Admin Role!"});
                    return;
                }
            );
        }
    });
};
