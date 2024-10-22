import { Request,RequestHandler,Response } from "express";
import * as UserService from './users.service';

export const readUsers:RequestHandler = async (req:Request,res:Response) => {
    try{
        const users = await UserService.getAllUsers();
        res.status(200).json(
            users
        );
    }catch(error){
        console.error('[albums.controller][readAlbums][Error] ',error);
        res.status(500).json({
            message:'There was an error when fetching users'
        });
    }
}
export const readUserById: RequestHandler = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.userId);
        const users = await UserService.getUserById(userId);
        
        if (users.length === 0) {
            res.status(404).json({
                message: `User with ID ${userId} not found`
            });
            return;
        }

        res.status(200).json(users[0]);
    } catch (error) {
        console.error('[users.controller][readUserById][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching user'
        });
    }
};

export const createUser: RequestHandler = async (req: Request, res: Response) => {
    try {
        const result = await UserService.createUser(req.body);
        res.status(201).json({
            message: 'User created successfully',
        });
    } catch (error) {
        console.error('[users.controller][createUser][Error] ', error);
        res.status(500).json({
            message: 'There was an error when creating new user'
        });
    }
};

export const updateUser: RequestHandler = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.userId);
        const updated = await UserService.updateUser(userId, req.body);

        if (!updated) {
            res.status(404).json({
                message: `User with ID ${userId} not found`
            });
            return;
        }

        res.status(200).json({
            message: 'User updated successfully'
        });
    } catch (error) {
        console.error('[users.controller][updateUser][Error] ', error);
        res.status(500).json({
            message: 'There was an error when updating user'
        });
    }
};

export const deleteUser: RequestHandler = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.userId);
        const deleted = await UserService.deleteUser(userId);
        
        if (!deleted) {
            res.status(404).json({
                message: `User with ID ${userId} not found`
            });
            return;
        }

        res.status(200).json({
            message: 'User deleted successfully'
        });
    } catch (error) {
        console.error('[users.controller][deleteUser][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting user'
        });
    }
};
