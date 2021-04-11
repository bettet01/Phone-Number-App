import { Router } from "express"
import {addNumber, deleteNumber, updateNumber, getNumbers} from "../service/phoneNumberService";



const router = Router();

router.get('/numbers', getNumbers);

router.post('/number', addNumber);

router.put('/number/:id', updateNumber);

router.delete('/number/:id', deleteNumber);

export default router;