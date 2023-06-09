import {Router} from "express";
import {addDoctor} from "../controller/POST/doctor.controller";

const router:Router = Router();

router.post('/', addDoctor)

export default router;