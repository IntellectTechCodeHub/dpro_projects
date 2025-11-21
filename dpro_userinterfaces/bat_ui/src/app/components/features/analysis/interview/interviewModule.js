// import libraries
'use client';

import { useState } from "react";
import InterviewForm from "./interviewForm.js"
import { Survey } from "./survey.js";
import { WorkspaceNavigation } from "./workspace/workspaceNavigation.js";
import { Workspace } from "./workspace/workspace.js";
import SaveDataValues from "@/app/components/data save/savedatavalues.js";

let serviceUrl = 'http://localhost:3000/interview';

const InterviewModule = () => {

    let interviewContent = <div></div>;
    let analysisInterviewStatus = 1;
    let interviewPageType = '';

    var [pageContentInterviewModule, setPageContentInterviewModule] = useState(<div></div>);
    var [userPriviledges, setUserPriviledges] = useState([]);
    //var [interviewPageType, setInterviewPageType] = useState('scheduler');
    const [interviewFormData, setInterviewFormData] = useState();
    const [isFormComplete, setIsFormComplete] = useState(false);
    
    const handleComplete = (e) => {
        alert('Add interview form complete');
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const dataJson = Object.fromEntries(formData);

        console.log(dataJson);

        const dataObj = {
            interviewId: "Interview Id",
            analysisDocumentId: "Analysis Document Id",
            interviewName: dataJson["Interview Name"],
            interviewDescription: dataJson["Interview Description"],
            interviewAttendeeId: dataJson["Attendee"],
            interviewScheduledDate: dataJson["Schedule Date"],
            interviewCompletedDate: "01/01/2025",
            interviewIsCompleted: false,
            interviewIsActive: true
        }

        console.log(dataObj);

        setInterviewFormData(dataObj);

        setIsFormComplete(true);

    }

    function buttonClick() {
        alert('complete add interview form')
    }

    function getAccess() {

        // retrieve from state
        // var userAccess = state.userPriviledges;
        return true;
    }

    // var isAnalystRole = getAccess();
    // var useSchedule = isSchedulerEnabled();
    if(analysisInterviewStatus == 1){
        interviewPageType = 'workspace';
    }
    else {
        interviewPageType = 'schedule';
    }

    if(interviewPageType == 'schedule'){
        interviewContent = 
            <form method="post" action onSubmit={handleComplete} className="w-[90%] mx-10% items-center justify-evenly">
                <div className="bg-slate-100 flex flex-col m-[2.5%] justify-center">
                    <div className="m-[2.5%] bg-slate-200"> 
                        <div className="m-[2.5%]"><InterviewForm /></div>
                    </div>
                    
                    <div className="m-[2.5%] bg-slate-500"> 
                        <div className="m-[2.5%]"><Survey /></div>
                    </div>
                    <div className="m-[2.5%] items-center">
                        <button type="submit" onClick={ buttonClick } className="w-full h-[50px] text-black border-3 outline-none hover:bg-green-100 p-2 rounded-sm"> Add interview </button> <br />
                    </div>
                </div>
            </form>;
    }
    else if (interviewPageType == 'workspace'){
        interviewContent = 
            <div className="bg-slate-100 flex m-[2.5%] justify-center">
                    <div className="w-[30%] m-[2.5%] bg-slate-200"> 
                        <div className="m-[2.5%]"><WorkspaceNavigation /></div>
                    </div>
                    
                    <div className="m-[2.5%] bg-slate-500"> 
                        <div className="w-full m-[2.5%]"><Workspace /></div>
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
            </div>
            <div className="w-full">
                <div className="w-full text-black text-bold text-lg m-[2.5%]">
                    <h2> Business Analysis Information </h2>
                </div>

                { !isFormComplete ? interviewContent : <SaveDataValues type="Interview" url={serviceUrl} data={interviewFormData}/>}
            </div>
        </div>
    );
}

export default InterviewModule;