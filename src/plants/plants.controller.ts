// // plants.controller.ts
// import { Request, RequestHandler, Response } from "express";
// import * as PlantService from './plants.service';

// export const readPlants: RequestHandler = async (req: Request, res: Response) => {
//     try {
//         // Assuming user_id is set in req by auth middleware
//         const userId = req.user?.id;
//         const plants = await PlantService.getAllPlants(userId);
//         res.status(200).json(plants);
//     } catch (error) {
//         console.error('[plants.controller][readPlants][Error] ', error);
//         res.status(500).json({
//             message: 'There was an error when fetching plants'
//         });
//     }
// }

// export const readPlantById: RequestHandler = async (req: Request, res: Response) => {
//     try {
//         const plantId = parseInt(req.params.plantId);
//         const userId = req.user?.id;
//         const plants = await PlantService.getPlantById(plantId, userId);

//         if (plants.length === 0) {
//             res.status(404).json({
//                 message: `Plant with ID ${plantId} not found`
//             });
//             return;
//         }

//         res.status(200).json(plants[0]);
//     } catch (error) {
//         console.error('[plants.controller][readPlantById][Error] ', error);
//         res.status(500).json({
//             message: 'There was an error when fetching plant'
//         });
//     }
// }

// export const createPlant: RequestHandler = async (req: Request, res: Response) => {
//     try {
//         const userId = req.user?.id;
//         const plant: Plant = {
//             ...req.body,
//             user_id: userId,
//             last_watered: new Date(req.body.last_watered)
//         };
        
//         const result = await PlantService.createPlant(plant);
//         res.status(201).json({
//             message: 'Plant created successfully'
//         });
//     } catch (error) {
//         console.error('[plants.controller][createPlant][Error] ', error);
//         res.status(500).json({
//             message: 'There was an error when creating new plant'
//         });
//     }
// }

// export const updatePlant: RequestHandler = async (req: Request, res: Response) => {
//     try {
//         const plantId = parseInt(req.params.plantId);
//         const userId = req.user?.id;
//         const plant: Plant = {
//             ...req.body,
//             last_watered: new Date(req.body.last_watered)
//         };

//         const result = await PlantService.updatePlant(plantId, userId, plant);

//         if (result.affectedRows === 0) {
//             res.status(404).json({
//                 message: `Plant with ID ${plantId} not found`
//             });
//             return;
//         }

//         res.status(200).json({
//             message: 'Plant updated successfully'
//         });
//     } catch (error) {
//         console.error('[plants.controller][updatePlant][Error] ', error);
//         res.status(500).json({
//             message: 'There was an error when updating plant'
//         });
//     }
// }

// export const deletePlant: RequestHandler = async (req: Request, res: Response) => {
//     try {
//         const plantId = parseInt(req.params.plantId);
//         const userId = req.user?.id;
//         const result = await PlantService.deletePlant(plantId, userId);

//         if (result.affectedRows === 0) {
//             res.status(404).json({
//                 message: `Plant with ID ${plantId} not found`
//             });
//             return;
//         }

//         res.status(200).json({
//             message: 'Plant deleted successfully'
//         });
//     } catch (error) {
//         console.error('[plants.controller][deletePlant][Error] ', error);
//         res.status(500).json({
//             message: 'There was an error when deleting plant'
//         });
//     }
// }
import { Request, RequestHandler, Response } from "express";
import * as PlantService from './plants.service';
import { Plant } from "./plant";

export const readPlants: RequestHandler = async (req: Request, res: Response) => {
    try {
        const plants = await PlantService.getAllPlants();
        res.status(200).json(plants);
    } catch (error) {
        console.error('[plants.controller][readPlants][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching plants'
        });
    }
}

export const readPlantById: RequestHandler = async (req: Request, res: Response) => {
    try {
        const plantId = parseInt(req.params.plantId);
        const plants = await PlantService.getPlantById(plantId);

        if (plants.length === 0) {
            res.status(404).json({
                message: `Plant with ID ${plantId} not found`
            });
            return;
        }

        res.status(200).json(plants[0]);
    } catch (error) {
        console.error('[plants.controller][readPlantById][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching plant'
        });
    }
}

export const createPlant: RequestHandler = async (req: Request, res: Response) => {
    try {
        const plant: Plant = {
            ...req.body,
            last_watered: new Date(req.body.last_watered)
        };
        
        const result = await PlantService.createPlant(plant);
        res.status(201).json({
            message: 'Plant created successfully'
        });
    } catch (error) {
        console.error('[plants.controller][createPlant][Error] ', error);
        res.status(500).json({
            message: 'There was an error when creating new plant'
        });
    }
}

export const updatePlant: RequestHandler = async (req: Request, res: Response) => {
    try {
        const plantId = parseInt(req.params.plantId);
        const plant: Plant = {
            ...req.body,
            last_watered: new Date(req.body.last_watered)
        };

        const result = await PlantService.updatePlant(plantId, plant);

        if (result.affectedRows === 0) {
            res.status(404).json({
                message: `Plant with ID ${plantId} not found`
            });
            return;
        }

        res.status(200).json({
            message: 'Plant updated successfully'
        });
    } catch (error) {
        console.error('[plants.controller][updatePlant][Error] ', error);
        res.status(500).json({
            message: 'There was an error when updating plant'
        });
    }
}

export const deletePlant: RequestHandler = async (req: Request, res: Response) => {
    try {
        const plantId = parseInt(req.params.plantId);
        const result = await PlantService.deletePlant(plantId);

        if (result.affectedRows === 0) {
            res.status(404).json({
                message: `Plant with ID ${plantId} not found`
            });
            return;
        }

        res.status(200).json({
            message: 'Plant deleted successfully'
        });
    } catch (error) {
        console.error('[plants.controller][deletePlant][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting plant'
        });
    }
}
