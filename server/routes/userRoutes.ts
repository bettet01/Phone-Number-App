import { Router } from "express"
import {checkDuplicateUsernameOrEmail, checkRolesExisted} from '../auth/verifySignUp'
import {signIn, signUp} from "../service/userService";




const router = Router();

router.post("/api/auth/signup", [checkDuplicateUsernameOrEmail, checkRolesExisted], signUp);

router.post("/api/auth/signin", signIn);


export default router;