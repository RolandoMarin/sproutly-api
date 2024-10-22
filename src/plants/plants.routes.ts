// plants.routes.ts
import { Router } from 'express';
import * as PlantController from './plants.controller';
import * as CareHistoryController  from '../carehistory/carehistory.controller';
const router = Router();

router.route('')
    .get(PlantController.readPlants)
    .post(PlantController.createPlant);

router.route('/:plantId')
    .get(PlantController.readPlantById)
    .put(PlantController.updatePlant)
    .delete(PlantController.deletePlant);

    router.route('/:plantId/care-history')
    .get(CareHistoryController.readCareHistory)
    .post(CareHistoryController.createCareHistory);

router.route('/:plantId/care-history/:entryId')
    .get(CareHistoryController.readCareHistoryEntry)
    .put(CareHistoryController.updateCareHistory)
    .delete(CareHistoryController.deleteCareHistory);


    export default router;
