import {Router} from "express";
import {addDoctor} from "../controller/POST/doctor.controller";

const router = Router();

router.post('/', addDoctor)

module.exports = router;