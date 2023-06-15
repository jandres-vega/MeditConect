import {Router} from "express";
import {createAppointment} from "../controller/POST/appointment.controller";
import {getAppointmentsDoctor} from "../controller/GET/appointment.controller";
const router = Router();

router.get('/:id', getAppointmentsDoctor)
router.post('/', createAppointment);

export default router;