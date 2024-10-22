import { Request, RequestHandler, Response } from "express";
import * as CareHistoryService from './carehistory.service';
import { CareHistory } from "./carehistory";

export const readCareHistory: RequestHandler = async (req: Request, res: Response) => {
    try {
        const plantId = parseInt(req.params.plantId);
        const history = await CareHistoryService.getCareHistory(plantId);
        res.status(200).json(history);
    } catch (error) {
        console.error('[care-history.controller][readCareHistory][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching care history'
        });
    }
}

export const readCareHistoryEntry: RequestHandler = async (req: Request, res: Response) => {
    try {
        const plantId = parseInt(req.params.plantId);
        const entryId = parseInt(req.params.entryId);
        const history = await CareHistoryService.getCareHistoryEntry(entryId, plantId);

        if (history.length === 0) {
            res.status(404).json({
                message: `Care history entry with ID ${entryId} not found`
            });
            return;
        }

        res.status(200).json(history[0]);
    } catch (error) {
        console.error('[care-history.controller][readCareHistoryEntry][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching care history entry'
        });
    }
}

export const createCareHistory: RequestHandler = async (req: Request, res: Response) => {
    try {
        const plantId = parseInt(req.params.plantId);
        const careHistory: CareHistory = {
            ...req.body,
            plant_id: plantId,
            care_date: new Date(req.body.care_date)
        };
        
        const result = await CareHistoryService.createCareHistory(careHistory);
        res.status(201).json({
            message: 'Care history entry created successfully'
        });
    } catch (error) {
        console.error('[care-history.controller][createCareHistory][Error] ', error);
        res.status(500).json({
            message: 'There was an error when creating care history entry'
        });
    }
}

export const updateCareHistory: RequestHandler = async (req: Request, res: Response) => {
    try {
        const plantId = parseInt(req.params.plantId);
        const entryId = parseInt(req.params.entryId);
        const careHistory: CareHistory = {
            ...req.body,
        };
        console.log(careHistory);
        
        const result = await CareHistoryService.updateCareHistory(entryId, plantId, careHistory);

        if (result.affectedRows === 0) {
            res.status(404).json({
                message: `Care history entry with ID ${entryId} not found`
            });
            return;
        }

        res.status(200).json({
            message: 'Care history entry updated successfully'
        });
    } catch (error) {
        console.error('[care-history.controller][updateCareHistory][Error] ', error);
        res.status(500).json({
            message: 'There was an error when updating care history entry'
        });
    }
}

export const deleteCareHistory: RequestHandler = async (req: Request, res: Response) => {
    try {
        const plantId = parseInt(req.params.plantId);
        const entryId = parseInt(req.params.entryId);
        const result = await CareHistoryService.deleteCareHistory(entryId, plantId);

        if (result.affectedRows === 0) {
            res.status(404).json({
                message: `Care history entry with ID ${entryId} not found`
            });
            return;
        }

        res.status(200).json({
            message: 'Care history entry deleted successfully'
        });
    } catch (error) {
        console.error('[care-history.controller][deleteCareHistory][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting care history entry'
        });
    }
}
