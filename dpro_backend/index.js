import mongoose from 'mongoose';
import express from 'express';
import http from 'http'; //consider secure https
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import User from './models/UserModel.js';
import DbAuth from './dbauth/DbAuth_UserModel_Test.js';
import UserRouter from './routers/UserRouter.js';

async function main(){

    const app = express();

    app.use(cors({ credentials: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(compression());
    app.use(UserRouter);

    const server = http.createServer(app);

    server.listen('3000', () => {
        console.log('server running on port 3000');
    });

    //DbAuth();
    
}

main().catch(console.dir);