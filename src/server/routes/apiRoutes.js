import { Router } from 'express';
import showsController from '../controllers/apiControllers/showsController';

const router = Router();

router.use('/shows', showsController);

export default router;