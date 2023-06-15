import {Router} from "express";
import {addDoctor} from "../controller/POST/doctor.controller";
import {getDoctors, getDoctorById} from "../controller/GET/doctor.controller";
import {schemaDoctor} from "../schemas/doctor.schema";
import {validatorHandlers, Property} from "../middlewares/validator.handlers";

const router:Router = Router();

router.get('/', getDoctors);
router.get('/:id', getDoctorById);
router.post('/',validatorHandlers(schemaDoctor, Property.body), addDoctor);

export default router;