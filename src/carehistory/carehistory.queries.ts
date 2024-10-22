export const careHistoryQueries = {
    readCareHistory: `
    SELECT 
        id,
        plant_id,
        date,
        notes
    FROM care_history
    WHERE plant_id = ?
    ORDER BY date DESC
    `,

    readCareHistoryEntry: `
    SELECT 
        id,
        plant_id,
        date,
        notes
    FROM care_history
    WHERE id = ? AND plant_id = ?
    `,

    createCareHistory: `
    INSERT INTO care_history(plant_id, date, notes)
    VALUES(?, ?, ?)
    `,

    updateCareHistory: `
    UPDATE care_history
    SET date = ?, notes = ?
    WHERE id = ? AND plant_id = ?
    `,

    deleteCareHistory: `
    DELETE FROM care_history
    WHERE id = ? AND plant_id = ?
    `
}
