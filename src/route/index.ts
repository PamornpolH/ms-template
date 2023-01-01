import { Router } from 'express';

const router: Router = Router();

router.use('/menu', MenuRoute);

export default router;