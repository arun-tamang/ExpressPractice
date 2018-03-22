import { Router } from 'express';
import HttpStatus from 'http-status-codes';
import * as showsService from '../../services/showsService';

const router = Router();

router.get('/', (req, res, next) => {
  showsService
    .getShows()
    .then(data => {
      // res.json({data})
      res.status(HttpStatus.OK).json(data);
    })
    .catch(err => next(err));
});

export default router;
