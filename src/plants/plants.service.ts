import { OkPacket } from "mysql";
import { execute } from "../config/database";
import { Plant } from "./plant";
import { plantQueries } from "./plants.queries";

export const getAllPlants = async () => {
    return execute<Plant[]>(plantQueries.readPlants, []);
}

export const getPlantById = async (plantId: number) => {
    return execute<Plant[]>(plantQueries.readPlantById, [plantId]);
}

export const createPlant = async (plant: Plant) => {
    return execute<OkPacket>(plantQueries.createPlant, 
        [plant.name, plant.image_url, plant.last_watered, plant.user_id]);
}

export const updatePlant = async (plantId: number, plant: Plant) => {
    return execute<OkPacket>(plantQueries.updatePlant,
        [plant.name, plant.image_url, plant.last_watered, plant.user_id, plantId]);
}

export const deletePlant = async (plantId: number) => {
    return execute<OkPacket>(plantQueries.deletePlant, [plantId]);
}