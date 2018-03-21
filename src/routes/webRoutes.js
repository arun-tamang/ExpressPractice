import { Router } from 'express';
import showsController from '../frontend/controllers/showsController';

const router = Router();

router.use('/shows', showsController);

export default router;
