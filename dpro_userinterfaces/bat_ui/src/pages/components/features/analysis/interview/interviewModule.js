// import libraries
'use client';

import { useState } from "react";
import Workspace from "./workspace/workspace.js";
import { ProgressBar } from "../../../../../app/components/ui/progress-indicators/progress-indicators.tsx";

const InterviewModule = () => {

    let interviewContent = <div></div>;
    let analysisInterviewStatus = 1;
    let interviewPageType = 'workspace';

    var [pageContentInterviewModule, setPageContentInterviewModule] = useState(<div></div>);
    var [userPriviledges, setUserPriviledges] = useState([]);

    function getAccess() {

        // retrieve from state
        // var userAccess = state.userPriviledges;
        return true;
    }

    // var isAnalystRole = getAccess();
    // var useSchedule = isSchedulerEnabled();
    // if(analysisInterviewStatus == 1){
    //     interviewPageType = 'workspace';
    // }
    // else if(interviewPageType == undefined) {
    //     interviewPageType = 'schedule';
    // }

    if (interviewPageType == 'workspace' || interviewPageType == undefined){
        interviewContent = 
            <div className="bg-slate-100 flex m-[2.5%] justify-center">
                    <div className="m-[2.5%] bg-slate-500"> 
                        <div className="m-[2.5%]"><Workspace /></div>
                    </div>
            </div>;
    }
    
    //setPageContentInterviewModule(interviewContent);

    return (
        <div className="w-full bg-slate-500 p-[10%] m-[10] flex flex-col text-black text-extrabold items-center justify-evenly">
            <div>
                <div className="text-black text-bold text-xl m-[2.5%]">
                    <h1> Research Analysis Interview </h1>
                </div>
                
                <div className="text-black text-bold text-sm m-[2.5%]">
                    <h3> Welcome, today is { Date.now().toString() }. </h3>
                </div>

                <div className="text-black text-bold text-md m-[2.5%]">
                    <p>
                        Instructions: Create a list of survey questions and share with business technical professionals to complete before the scheduled analysis interview.
                        Then use the scheduler to confirm or update the interview date and time. When complete send updated schedule and survey to the business.
                    </p>
                </div>
                
                <div className="flex flex-col w-full m-[2.5%] items-center justify-evenly">
                    <h3 className="font-bold text-sm items-center"> Interview Progress </h3>
                    <ProgressBar min={1} max={10} value={1} labelPosition="bottom-floating" className="items-center justify-evenly" />
                </div>
            </div>
            <div className="w-full">
                <div className="w-full text-black text-bold text-lg m-[2.5%]">
                    <h2> Business Analysis Information </h2>
                </div>
                { interviewContent }
            </div>
        </div>
    );
}

export default InterviewModule;