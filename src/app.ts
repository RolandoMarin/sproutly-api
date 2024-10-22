import express, { Request,Response } from 'express';
import dotenv from 'dotenv';
import users from './users/users.routes';
import plants from './plants/plants.routes';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/users',users);
app.use('/plants', plants);


app.listen(PORT, () => {
   console.log(`Server running at http://localhost:${PORT}`);
 });

 