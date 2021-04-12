import { Router } from "express"
import {addNumber, deleteNumber, updateNumber, getNumbers} from "../service/phoneNumberService";
import {isAdmin, verifyToken} from "../auth/jwtAuth";



const router = Router();

router.get('/api/numbers', [verifyToken], getNumbers);

router.post('/api/number', [verifyToken], addNumber);

router.put('/api/number/:id', [verifyToken], updateNumber);

router.delete('/api/number/:id', [verifyToken, isAdmin], deleteNumber);

export default router;