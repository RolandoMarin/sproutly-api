export const userQueries = {
    readUsers: `
    SELECT 
        id,
        first_name,
        email,
        username
    FROM users
    `,

    readUserById: `
    SELECT 
        id,
        first_name,
        email,
        username
    FROM users
    WHERE id = ?
    `,

    readUserByUsername: `
    SELECT 
        id,
        first_name,
        email,
        username,
        password
    FROM users
    WHERE username = ?
    `,

    createUser: `
    INSERT INTO users(first_name, email, username, password) 
    VALUES(?, ?, ?, ?)
    `,

    updateUser: `
    UPDATE users
    SET first_name = ?, email = ?, username = ?, password = ?
    WHERE id = ?
    `,

    deleteUser: `
    DELETE FROM users
    WHERE id = ?
    `
};