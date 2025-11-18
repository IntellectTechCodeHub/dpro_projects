'use client';

import { useState, useEffect } from "react";
import Problem from "./problem.js";
import Solution from "./solution.js";
import InterviewScheduler from "./interview/interviewScheduler.js";
import Button from "../../elements/button.js";
import { MdTipsAndUpdates } from "react-icons/md";
import SaveDataValues from "../../data save/savedatavalues.js";

let serviceUrl = "http://localhost:3000/analysis";

const Analysis = () => {
    var httpReturnValue;
    var hasSent, saveInProgress, saveComplete = false;
    var saveTypes = ["Analysis"];

    const [pageContentAnalysis, setPageContentAnalysis] = useState(<div></div>);
    const [hasUpcomingInterviews, setHasUpcomingInterviews] = useState(false);
    const [existingInterviews, setExistingInterviews]  = useState([]);
    const [userPriviledges, setUserPriviledges] = useState();
    const [analysisFormData, setAnalysisFormData] = useState();
    const [isFormComplete, setIsFormComplete] = useState(false);

    const handleComplete = (e) => {
        //e.preventDefault();
        alert('form info complete');
        const form = e.target;
        const formData = new FormData(form);
        const dataJson = Object.fromEntries(formData);
        console.log(dataJson);
        const dataObj = {
            analysisId: dataJson["Analysis"] + "-" + crypto.randomUUID(),
            workflowId: dataJson["Workflow Document Id"],
            name: dataJson["Analysis"],
            requestorId: dataJson["Requestor"],
            analystId: dataJson["Analyst"],
            scheduledDate: dataJson["Interview"],
            createdDate: '01-01-2025',
            completedDate: '01-01-2025',
            status: 'new',
            isActive: true,
            problemId: dataJson["Problem Name"] + "-" + crypto.randomUUID(),
            problemName: dataJson["Problem Name"],
            problemDescription: dataJson["Problem Description"],
            suggestions: dataJson["Suggestion1"],
            suggestions: dataJson["Suggestion2"],
            suggestions: dataJson["Suggestion3"],
            suggestions: dataJson["Suggestion4"],
            problemCreatedDate: '01012025',
            problemIsResolved: false,
            problemIsActive: true,
            solutionId: dataJson["Solution Name"] + "-" + crypto.randomUUID(),
            solutionName: dataJson["Solution Name"],
            solutionDescription: dataJson["Solution Description"],
            analysisDocumentId: dataJson["Analysis Document Id"],
            problemDocumentId: dataJson["Problem Document Id"],
            solutionCreatedDate: '01-01-2025',
            solutionCompletedDate: '01-01-2025',
            solutionIsComplete: false,
            solutionIsActive: true
        }

        setAnalysisFormData(dataObj);
        console.log(dataObj);
        setIsFormComplete(true);
    }

    const buttonClick = () => {
        alert('analysis form complete');
    }

    var contentForm =  
        <form method="post" action onSubmit={handleComplete} className="w-[90%] mx-10% items-center justify-evenly">
            <div className="bg-slate-100 m-[2.5%] w-full flex items-center shadow-10 text-gray-700 rounded-sm">
                <input name="Analysis" type="text" placeholder="Name for analysis" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />
            </div>
            <div className="bg-slate-100 m-[2.5%] w-full flex items-center shadow-10 text-gray-700 rounded-sm">
                <input name="Workflow Document Id" type="text" placeholder="Workflow Document Id" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />
            </div>
            <div className="bg-slate-100 m-[2.5%] w-full flex items-center shadow-10 text-gray-700 rounded-sm">
                <input name="Requestor" type="text" placeholder="Requestor" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />
            </div>
            <div className="bg-slate-100 m-[2.5%] w-full flex items-center shadow-10 text-gray-700 rounded-sm">
                <input name="Analyst" type="text" placeholder="Analyst" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />
            </div>
            <div className="bg-slate-100 m-[2.5%] w-full flex items-center">
                <input name="Analysis Description" type="text" placeholder="Analysis Description" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />
            </div>
            <div className="w-full">
                <InterviewScheduler />
            </div>
            <div className="bg-slate-400 m-[2.5%] w-full flex items-center">
                <Problem />
            </div>
            <div className="bg-slate-600 m-[2.5%] w-full flex items-center">
                <Solution />
            </div>
            <div className="bg-slate-100 m-[2.5%] w-full flex items-center">
                <Button type="submit" onClick={ buttonClick } className="w-full h-[50] m-[2.5%] font-bold items-center justify-center rounded-sm"> Create Analysis </Button>
            </div>
        </form>;

    return(
        <div className="bg-slate-100 m-[2.5%] w-full flex flex-col items-center justify-evenly">
            <div className="w-full">
                <div className="bg-slate-100 m-[2.5%] w-full flex flex-col items-center justify-evenly">
                    <MdTipsAndUpdates className="color-gray-400 c w-[20%] h-[20%]"/>
                    <h1 className="text-2xl items-center"> Welcome to the Business Analysis Process. </h1>
                </div>
                {
                    !isFormComplete ? contentForm : <SaveDataValues type={saveTypes[0]} url={serviceUrl} data={analysisFormData} />
                }
            </div>     
        </div>
    );
}

export default Analysis;