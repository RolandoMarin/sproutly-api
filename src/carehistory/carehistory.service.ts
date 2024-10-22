import { OkPacket } from "mysql";
import { execute } from "../config/database";
import { CareHistory } from "./carehistory";
import { careHistoryQueries } from "./carehistory.queries";

export const getCareHistory = async (plantId: number) => {
    return execute<CareHistory[]>(careHistoryQueries.readCareHistory, [plantId]);
}

export const getCareHistoryEntry = async (entryId: number, plantId: number) => {
    return execute<CareHistory[]>(careHistoryQueries.readCareHistoryEntry, [entryId, plantId]);
}

export const createCareHistory = async (careHistory: CareHistory) => {
    return execute<OkPacket>(careHistoryQueries.createCareHistory, 
        [careHistory.plant_id, careHistory.date, careHistory.notes]);
}

export const updateCareHistory = async (entryId: number, plantId: number, careHistory: CareHistory) => {
    return execute<OkPacket>(careHistoryQueries.updateCareHistory,
        [careHistory.date, careHistory.notes, entryId, plantId]);
}

export const deleteCareHistory = async (entryId: number, plantId: number) => {
    return execute<OkPacket>(careHistoryQueries.deleteCareHistory, [entryId, plantId]);
}
