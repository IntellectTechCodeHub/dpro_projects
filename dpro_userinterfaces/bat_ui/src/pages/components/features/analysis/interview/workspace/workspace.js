"use client";

import React, { useState } from "react";
import Intake from "../../../../intake.js";
import InterviewAnalyst from "../interviewAnalyst.js"
import InterviewScheduler from "../interviewScheduler.js";
import InterviewForm from "../interviewForm.js";
import Review from "../../../../review.js";
import { IoMdCreate, IoMdInformation, IoMdCalendar, IoMdGlasses, IoMdPersonAdd } from "react-icons/io";
import { ButtonGroup, ButtonGroupItem } from "../../../../../../app/components/ui/button-group/button-group.tsx";
import Analysis from "../../analysis.js";


const Workspace = () => {

    let [interviewPageType, setInterviewPageType] = useState();
    let [analysisComplete, setAnalysisComplete] = useState(false);
    let [intakeComplete, setIntakeComplete] = useState(false); 
    let [analystComplete, setAnalystComplete] = useState(false);
    let [scheduleComplete, setScheduleComplete] = useState(false);
    let [interviewComplete, setInterviewComplete] = useState(false);
    let [reviewComplete, setReviewComplete] = useState(false);
    let [selectionType, setSelectionType] = useState();// Intake, Analyst, Schedule, Interview, Review
    let [analysisFormData, setAnalysisFormData] = useState();

    let infoPanel1, infoPanel2 = <div></div>;

    let analysisInfo = 
        <div className="componentDiv">
                <h3 className="pageTitle" > Analysis Name{ /*analysisData.name */ } </h3>
                <div className="tableDiv">
                    <h3 className="pageTitle"> Problems </h3>
                    { analysisFormData ? analysisData.problems.map((p) => <li className="tableListItem"> {p.problemName} | {p.problemDescription} | {p.problemIsActive} </li>) : "info unavailable" }
                </div>
                <div className="tableDiv">
                    <h3 className="pageTitle"> Solutions </h3>
                    { analysisFormData ? analysisData.solutions.map((s) => <li className="tableListItem"> {s.solutionName} | {s.solutionDescription} | {s.solutionIsActive} </li>) : "info unavailable" }
                </div>
        </div>;
    
    infoPanel1 = 
        <div className="m-[2.5%] bg-slate-200 items-center justify-evenly">
            <div className="m-[2.5%] text-bold text-lg text-center items-center"><h2> Information panel </h2></div>
            <div className="w-full h-[300] bg-white items-center">
                <p className="m-[2.5%] text-md text-center items-center justify-evenly"> Tip of the week: Prepare for updates to software features by reading the release notes before upgrading to the latest version. </p>
            </div>
            { analysisComplete ? <analysisInfo /> : "" }
        </div>;
    
    if(selectionType == "Analysis" || selectionType == undefined){
        infoPanel2 = <Analysis />;
    }
    else if(selectionType == "Intake"){
        infoPanel2 = <Intake />;
    }
    else if(selectionType == "Analyst"){
        infoPanel2 = <InterviewAnalyst />;
    }
    else if(selectionType == "Schedule"){
        infoPanel2 = <InterviewScheduler />;
    } 
    else if(selectionType == "Interview"){
        infoPanel2 = <InterviewForm />;
    }
    else if(selectionType == "Review"){
        infoPanel2 = <Review  />;
    }

    function WorkspaceNavigation() {
        let links = [{address: '#', id: 1}, {address: '#', id: 2}, {address: '#', id: 3}];
    
        let buttonClick = () => {
            alert('navigate to scheduler');
            setInterviewPageType('scheduler');
            console.log(interviewPageType);
        }
    
        let intakeClicked = () => {
            alert('intake button clicked');
            setAnalysisComplete(true);
            setSelectionType('Intake');
        }
    
        let analystClicked = () => {
            alert('analyst button clicked');
            setIntakeComplete(!intakeComplete);
            setSelectionType('Analyst');
        }
    
        let scheduleClicked = () => {
            alert('schedule button clicked');
            setAnalystComplete(!analystComplete);
            setSelectionType('Schedule');
        }
    
        let interviewClicked = () => {
            alert('interview button clicked');
            setScheduleComplete(!scheduleComplete);
            setSelectionType('Interview');
        }
    
        let reviewClicked = () => {
            alert('review button clicked');
            setInterviewComplete(!interviewComplete);
            setSelectionType('Review');
        }
    
        let buttonClick_navGroup = () => {
            alert('navigate to ...');
        }
    
        let navContent = 
            <div className="bg-slate-200 flex flex-col w-full items-center justify-evenly">
                <div className="text-bold text-lg">
                    <div className="flex m-[2.5%] items-center justify-evenly">
                        <ButtonGroup selectedKeys={[]} selectionMode="single" onSelectionChange={ buttonClick_navGroup }>
                            <ButtonGroupItem isSelected={ selectionType == 'Intake'} id="step1" iconLeading={ IoMdCreate } onClick={ intakeClicked }> intake </ButtonGroupItem>
                            <ButtonGroupItem isSelected={ selectionType == 'Analyst'} id="step2" iconLeading={ IoMdPersonAdd } onClick={ analystClicked }> analyst </ButtonGroupItem>
                            <ButtonGroupItem isSelected={ selectionType == 'Schedule' ? true : false } id="step3" iconLeading={ IoMdCalendar } onClick={ scheduleClicked }> schedule </ButtonGroupItem>
                            <ButtonGroupItem isSelected={ selectionType == 'Interview' ? true : false } id="step4" iconLeading={ IoMdInformation } onClick={ interviewClicked }> interview </ButtonGroupItem>
                            <ButtonGroupItem isSelected={ selectionType == 'Review' ? true : false } id="step5" iconLeading={ IoMdGlasses } onClick={ reviewClicked }> review </ButtonGroupItem>
                        </ButtonGroup>
                    </div>
                    <div className="text-black text-bold text-md m-[2.5%]">
                        <h3 className="font-bold text-sm text-green-700"> How-to use this navigation instructions </h3>
                        <p className='text-sm'>
                            Complete each step in the analysis interview workflow. After finalizing reqrements for each step the next step is enabled. For example after completing the intake process, the analyst selector is enabled, and so on until the review step is complete.
                        </p>
                    </div>
                </div>
            </div>;
        
        return (
         navContent
        );
    }

    return (
        <div className="bg-slate-500 flex flex-col m-[2.5%] items-center justify-evenly">
            <div className="w-full m-[2.5%] bg-slate-200"> 
                <div className="items-center"><WorkspaceNavigation /></div>
            </div>
            <div className="text-bold text-lg">
                <h2>Workspace</h2>
            </div>
            <div className="items-center justify-evenly">
                {infoPanel1}
            </div>
            <div className="w-full items-center justify-evenly">
                {infoPanel2}
            </div>
        </div>
    );
}
export default Workspace;