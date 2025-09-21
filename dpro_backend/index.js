import mongoose from 'mongoose';
import express from 'express';
import http from 'http'; //consider secure https
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import UserRouter from './routers/UserRouter.js';
import AnalysisRouter from './routers/AnalysisRouter.js';

async function main(){

    const app = express();

    app.use(cors({ credentials: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(compression());
    app.use(UserRouter);
    app.use(AnalysisRouter);

    const server = http.createServer(app);

    server.listen('3000', () => {
        console.log('server running on port 3000');
    });
    
}

main().catch(console.dir);