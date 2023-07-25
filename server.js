import dotenv from 'dotenv';
import express from 'express';
import mongoose, { mongo } from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import fileupload from 'express-fileupload';
import apiRouter from './src/routes.js'

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
    console.log('Error: ', error.message);
})

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(fileupload());

server.use(express.static(__dirname + 'public'));

server.use('/', apiRouter);

server.listen(process.env.PORT, () => {
    console.log(`Server rodando em ${process.env.BASE}`);
})