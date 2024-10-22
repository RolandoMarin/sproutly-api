export const plantQueries = {
    readPlants: `
    SELECT 
        id,
        name,
        image_url,
        last_watered,
        user_id
    FROM plants
    `,

    readPlantById: `
    SELECT 
        id,
        name,
        image_url,
        last_watered,
        user_id
    FROM plants
    WHERE id = ?
    `,

    createPlant: `
    INSERT INTO plants(name, image_url, last_watered, user_id)
    VALUES(?, ?, ?, ?)
    `,

    updatePlant: `
    UPDATE plants
    SET name = ?, image_url = ?, last_watered = ?, user_id = ?
    WHERE id = ?
    `,

    deletePlant: `
    DELETE FROM plants
    WHERE id = ?
    `
}