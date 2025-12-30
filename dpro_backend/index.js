import express from 'express';
import http from 'http'; //consider secure https
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import UserRouter from './routers/UserRouter.js';
import BusinessRouter from './routers/BusinessRouter.js';
import WorkflowRouter from './routers/WorkflowRouter.js';
import AnalysisRouter from './routers/analysis routers/AnalysisRouter.js';
import InterviewRouter from './routers/analysis routers/InterviewRouter.js';
import ArchitectureRouter from './routers/ArchitectureRouter.js';
import UseCaseRouter from './routers/UseCaseRouter.js';
import GovernanceRouter from './routers/GovernanceRouter.js';
import ComplianceRouter from './routers/ComplianceRouter.js';
import TelemetryRouter from './routers/telemetry/TelemetryEventRouter.js';
import { logWebAPIServerAppStart, telemetryEvent, testDbName, testServerPort } from './config/constants.js';
import { LogEvent } from './helpers/api/logger/logEvent.js';
import { TelemetryEventSchema } from './models/telemetry/TelemetryEventModel.js';

async function main(){

    const app = express();

    app.use(cors({ credentials: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(compression());

    app.use(UserRouter);
    app.use(BusinessRouter);
    app.use(WorkflowRouter);
    app.use(AnalysisRouter);
    app.use(InterviewRouter);
    app.use(ArchitectureRouter);
    app.use(UseCaseRouter);
    app.use(GovernanceRouter);
    app.use(ComplianceRouter);
    app.use(TelemetryRouter);
    

    const server = http.createServer(app);

    server.listen(testServerPort, () => {
        console.log(logWebAPIServerAppStart.process);
    });

    console.log(logWebAPIServerAppStart);
    let log = LogEvent(testDbName, telemetryEvent, TelemetryEventSchema, logWebAPIServerAppStart);
}

main().catch(console.dir);