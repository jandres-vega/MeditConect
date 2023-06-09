import {Router} from "express";
import {addUser} from "../controller/POST/user.controller";
import {getAllUsers} from "../controller/GET/user.controller";
import {validatorHandlers, Property} from "../middlewares/validator.handlers";
import {userSchema} from "../schemas/user.schema";

const router = Router();

router.get('/', getAllUsers);
router.post('/',validatorHandlers(userSchema, Property.body), addUser);
export default router;