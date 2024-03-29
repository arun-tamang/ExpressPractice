import { Router } from 'express';

import apiRoutes from './apiRoutes';
import webRoutes from './webRoutes';

const router = Router();

// Load api routes
router.use('/api', apiRoutes);

// Load client (or web) routes
router.use('/', webRoutes);

export default router;
