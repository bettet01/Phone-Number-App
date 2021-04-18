import { Router } from "express"
import {checkDuplicateUsernameOrEmail, checkRolesExisted} from '../auth/verifySignUp'
import {getUsers, signIn, signUp} from "../service/userService";
import {isAdmin, verifyToken} from "../auth/jwtAuth";




const router = Router();

router.post("/api/auth/signup", [checkDuplicateUsernameOrEmail, checkRolesExisted], signUp);

router.post("/api/auth/signin", signIn);

router.get("/api/users", [verifyToken, isAdmin], getUsers)


export default router;