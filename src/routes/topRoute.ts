import express from 'express';

const router = express.Router();
import { indexAction } from '../controllers/topController';

// GET POST
router.route('/')
    .get(indexAction)

export default router;