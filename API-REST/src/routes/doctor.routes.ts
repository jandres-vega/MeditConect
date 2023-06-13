import {Router} from "express";
import {addDoctor} from "../controller/POST/doctor.controller";
import {getDoctors} from "../controller/GET/doctor.controller";
import {schemaDoctor} from "../schemas/doctor.schema";
import {validatorHandlers, Property} from "../middlewares/validator.handlers";

const router:Router = Router();

router.get('/', getDoctors)
router.post('/',validatorHandlers(schemaDoctor, Property.body), addDoctor)

export default router;