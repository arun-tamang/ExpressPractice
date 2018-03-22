import { Router } from 'express';
import showsController from '../controllers/webControllers/showsController';

const router = Router();

router.use('/shows', showsController);

export default router;
