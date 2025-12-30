"use client";

import { useState } from "react";
import { MdOutlineBusiness } from "react-icons/md";
import Discovery from "../../../../components/features/analysis/interview/workspace/discovery/discovery.js"
import SaveDataValues from "../../../data save/savedatavalues.js";
import { IoMdContact, IoIosAnalytics, IoMdInformation } from "react-icons/io";

let serviceUrl = "http://localhost:3000/interview";

const InterviewForm = () => {

    let saveTypes = ["Interview"];

    const [interviewInfo, setInterviewInfo] = useState();
    const [interviewFormData, setInterviewFormData] = useState();
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [interviewComplete, setInterviewComplete] = useState(false);
    const [analysisId, setAnalysisId] = useState(['000000']);

    function handleComplete(e) {
        e.preventDefault();
        alert('interview form complete');

        const form = e.target;
        const formData = new FormData(form);
        const dataJson = Object.fromEntries(formData);
        console.log(dataJson);

        let assessments = [];
        let hasAssessment = dataJson["Existing Software"] !== undefined;

        if(hasAssessment){
            assessments.push({ 'assess': 'Existing Software', 'assessment': dataJson["Existing Software"] });
            assessments.push({ 'assess': 'Challenge', 'assessment': dataJson["Challenge"] });
            assessments.push({ 'assess': 'Solution', 'assessment': dataJson["Solution"] });
            assessments.push({ 'assess': 'Preferred', 'assessment': dataJson["Preferred Solution"] });
            assessments.push({ 'assess': 'Blocker', 'assessment': dataJson["Blockers"] });
            assessments.push({ 'assess': 'Integration', 'assessment': dataJson["Integrations"] });
            assessments.push({ 'assess': 'Usability', 'assessment': dataJson["Usability"] });
            assessments.push({ 'assess': 'Perf', 'assessment': dataJson["Performance"] });
            assessments.push({ 'assess': 'Feature', 'assessment': dataJson["Feature"] });
            assessments.push({ 'assess': 'Support', 'assessment': dataJson["Support"] });
            assessments.push({ 'assess': 'Problem', 'assessment': dataJson["Problem Improvements"] });
            assessments.push({ 'assess': 'Customer', 'assessment': dataJson["Customers"] });
            assessments.push({ 'assess': 'Business', 'assessment': dataJson["Business Metrics"] });
            assessments.push({ 'assess': 'Service', 'assessment': dataJson["Services"] });
        }

        const dataObj = {
            interviewId: "Interview-" + crypto.randomUUID(),
            analysisDocumentId: analysisId[0],
            interviewName: dataJson["Interview Name"],
            interviewDescription: dataJson["Interview Description"],
            interviewAttendeeId: dataJson["Attendee Ids"],
            interviewCreatedDate: '01-01-2025',
            interviewCompletedDate: '01-01-2025',
            interviewIsComplete: true,
            interviewIsActive: true,
            assessments: assessments
        };

        setInterviewFormData(dataObj);
        console.log(dataObj);
        setIsFormComplete(true);
    }

    function buttonClick() {
        alert('complete add interview form');
        setInterviewComplete(true);
    }

    let pageContent = 
        <form method="post" action onSubmit={handleComplete} className="w-full mx-10% items-center justify-evenly">
            <div className="componentDiv">
                <div className="bg-slate-100 m-[2.5%] flex items-center">
                    <p className="text-green-500 text-sm font-bold"> Instructions: Complete each section of the interview form during the interview meeting. </p>
                </div>
                <div className="bg-slate-100 m-[2.5%] flex flex-col items-center">
                    <p name="Interview Info" className="text-black text-bold" ></p>
                    <div className="bg-slate-100 m-[2.5%] w-full flex flex-col items-center shadow-10 text-gray-700 rounded-sm">
                        <div className="textInputDiv">
                            <IoMdContact className="textInputImage" />
                            <input name="Interview Name" type="text" placeholder="Interview Name" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />
                        </div>
                        <div className="textInputDiv">
                            <IoMdInformation className="textInputImage" /> 
                            <input name="Interview Description" type="text" placeholder="Description" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />
                        </div>
                    </div>
                    <div className="selectInputDiv">
                        <select id="Attendee Ids" name="Attendee Ids" className="selectInput" multiple> 
                            <option value={0}> analyst </option>   
                            <option value={1}> client team </option>
                            <option value={2}> stakeholder </option>
                            <option value={3}> tech specialist </option>
                        </select>
                    </div>    
                    <div className="selectInputDiv">
                        <IoIosAnalytics className="textInputImage" /> 
                        <label for="Existing Software" className="m-[2.5%] text-sm font-bold">Select the most recent tech project</label>
                        <select id="Existing Software" name="Existing Software" className="selectInput" multiple>
                            <option value="design"> architecture design </option>
                            <option value="development"> architecture development </option>
                            <option value="custom"> custom software </option>
                            <option value="policies"> digital transformation policies </option>
                            <option value="not listed"> other </option>
                        </select>
                    </div>
                    <Discovery />
                    <div className="buttonDiv">
                        <button type="submit" onClick={ buttonClick } className="button"> Add interview </button> <br />
                    </div>            
                </div>
            </div>
            </form>;

    return(
        <div className="bg-slate-100 m-[2.5%] w-full flex flex-col items-center justify-evenly">
            <div className="bg-slate-100 m-[2.5%] w-full flex flex-col items-center justify-evenly">
                <MdOutlineBusiness className="color-gray-400 c w-[20%] h-[20%]"/>
                <h1 className="text-2xl items-center"> Analysis Interview Meeting </h1>
            </div>
            <div className="w-full">
                { !isFormComplete ? pageContent : <SaveDataValues type={ saveTypes[0] } url={ serviceUrl } data={ interviewFormData } /> }
            </div>
        </div>
        
    );
}

export default InterviewForm;