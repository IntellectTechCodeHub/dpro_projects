import React, { useState } from "react";
import Domain from "../../../../../app/components/features/analysis/interview/workspace/workspace features/domain.js";
import SaveDataValues from "../../../data save/savedatavalues";
import { MdPersonOutline } from "react-icons/md";
import { IoMdContact, IoMdMail, IoIosPhonePortrait, IoMdCloudOutline, IoMdTrendingUp } from "react-icons/io";
import MeetingSelector from "../../../../../app/components/features/analysis/interview/workspace/workspace features/meetingselector.js";

let infoPanelName = 'Information gathering';
let serviceUrl = 'http://localhost:3000/interview/analyst';

const InterviewAnalyst = () => {

    let saveTypes = ["Analyst"];

    const [analystFormData, setAnalystFormData] = useState();
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [analystComplete, setAnalystComplete] = useState(false);
    const [userId, setUserId] = useState(["000000"]);
    const [analysisId, setAnalysisId] = useState(["000000"]);

    const handleComplete = (e) => {
        // e.preventDefault();
        alert('analyst form complete');

        const form = e.target;
        const formData = new FormData(form);
        const dataJson = Object.fromEntries(formData);
        console.log(dataJson);
        const dataObj = {
            analystId: "InterviewAnalyst-" + crypto.randomUUID(),
            analystUserDocumentId: userId[0],
            analysisDocumentId: analysisId[0],
            analystName: dataJson['Attendee'],
            analystEmail: dataJson['Attendee Contact'],
            analystPhone: dataJson['Attendee Phone'],
            analystRole: dataJson['Attendee Role'],
            analystAvailability: dataJson['Discovery Interview Availability'],
            analystIndustry: dataJson['Domain'],
            analystDateAdded: '01-01-2025',
            analystIsActive: true
        };

        setAnalystFormData(dataObj);
        console.log(dataObj);
        setIsFormComplete(true);
    }

    const buttonClick = () => {
        alert('analyst form complete');
        setAnalystComplete(true);
    }
    
    let pageContent = 
        <form method="post" action onSubmit={handleComplete} className="w-full mx-10% items-center justify-evenly">
            <div className="w-full bg-slate-100 flex flex-col justify-center">
                <div className="m-[2.5%] mt-[50] bg-slate-200 items-center justify-evenly">
                    <div className="m-[2.5%] text-bold text-lg text-center items-center"><h2>{ infoPanelName }</h2></div>
                    <div className="h-auto bg-white flex flex-col items-center justify-evenly">
                        <div className="bg-slate-100 m-[2.5%] w-full flex flex-col items-center shadow-md text-gray-700 rounded-sm">
                            <div className="w-full m-[2.5%] flex bg-white items-center">
                                <IoMdTrendingUp className="textInputImage" />
                                <label for="Domain" className="m-[2.5%] text-sm font-bold">Choose your domain</label>
                                <select id="Domain" name="Domain" className="selectInput">
                                    <option value="healthcare">healthcare</option>
                                    <option value="finance">finance</option>
                                </select>
                            </div>
                            <div className="bg-slate-100 m-[2.5%] w-full flex flex-col items-center shadow-md text-gray-700 rounded-sm">
                                <div className="textInputDiv">
                                    <IoMdContact className="textInputImage" />
                                    <input id="Attendee" name="Attendee" type="text" placeholder="Name" className="textInput" />
                                </div>
                                <div className="textInputDiv">
                                    <IoMdMail className="textInputImage" />
                                    <input id="Attendee Contact" name="Attendee Contact" type="email" placeholder="Email Address" className="textInput" />
                                </div>
                                <div className="textInputDiv">
                                    <IoIosPhonePortrait className="textInputImage" />
                                    <input id="Attendee Phone" name="Attendee Phone" type="tel" placeholder="Phone" className="textInput" />
                                </div>
                            </div>
                            <div className="selectInputDiv">
                                <IoMdCloudOutline className="textInputImage" />
                                <label for="Attendee Role" className="m-[2.5%] text-sm font-bold">Add an attendee</label>
                                <select id="Attendee Role" name="Attendee Role" placeholder="Role" className="selectInput"> 
                                    <option value="0">analyst</option>
                                    <option value="1">attendee</option>
                                    <option value="2">stakeholder</option>
                                    <option value="3">team lead</option>
                                    <option value="4">team member</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col w-full m-[2.5%] bg-slate-200 items-center justify-evenly">
                            <div className="h-[100] m-[2.5%] text-gray items-center justify-evenly hover:bg-blue-200 rounded-sm">
                                <Domain />
                            </div>
                        </div>
                        <div className="componentDiv">
                            <MeetingSelector />
                        </div>
                        <div className="buttonDiv">
                            <button type="submit" onClick={ buttonClick } className="button"> Add Analyst </button> <br />
                        </div> 
                    </div>
                </div>
            </div>
        </form>;
    
    return(
        <div className="bg-slate-100 m-[2.5%] w-full flex flex-col items-center justify-evenly">
            <div className="bg-slate-100 m-[2.5%] w-full flex flex-col items-center justify-evenly">
                <MdPersonOutline className="color-gray-400 c w-[20%] h-[20%]"/>
                <h1 className="text-2xl items-center"> Analyst Selection </h1>
            </div>
            <div className="w-full">
                { !isFormComplete ? pageContent : <SaveDataValues type={ saveTypes[0] } url={ serviceUrl } data={ analystFormData } />}
            </div>
        </div>
    );
}

export default InterviewAnalyst;