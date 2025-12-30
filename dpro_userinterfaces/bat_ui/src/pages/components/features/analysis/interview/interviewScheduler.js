"use client";

import { useState } from "react";
import React from "react";
import Survey from "./survey.js";
import SaveDataValues from "../../../data save/savedatavalues.js";
import { MdCalendarToday } from "react-icons/md";
import { IoIosCalendar } from "react-icons/io";

let serviceUrl = "http://localhost:3000/interview/schedule";

const InterviewScheduler = () => {

    let saveTypes = ["Interview Schedule"];

    const [interviewScheduleFormData, setInterviewScheduleFormData] = useState();
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [meetings, setMeetings] = useState(
        [
            { 'meetingId': 'meeting' + crypto.randomUUID(), 'meetingType': 'form', 'meetingName': 'Analysis', 'meetingIsActive': true },
            { 'meetingId': 'meeting' + crypto.randomUUID(), 'meetingType': 'meeting', 'meetingName': 'Discovery', 'meetingIsActive': true },
            { 'meetingId': 'meeting' + crypto.randomUUID(), 'meetingType': 'meeting', 'meetingName': 'Review', 'meetingIsActive': true },
            { 'meetingId': 'meeting' + crypto.randomUUID(), 'meetingType': 'proposal', 'meetingName': 'Solutions', 'meetingIsActive': true },
            { 'meetingId': 'meeting' + crypto.randomUUID(), 'meetingType': 'document review', 'meetingName': 'Requirements', 'meetingIsActive': true },
            { 'meetingId': 'meeting' + crypto.randomUUID(), 'meetingType': 'meeting', 'meetingName': 'Retrospective', 'meetingIsActive': true }
        ]
    );
    const [hasMeetings, setHasMeetings] = useState(true);
    const [clientAvailability, setClientAvailability] = useState({ 'meetingName': 'discovery', 'availability': 'January 1, 2025' });
    const [analystAvailability, setAnalystAvailability] = useState(
        [
            {
                'meetingName': 'analysis',
                'availability': 'January 1, 2025'
            },
            {
                'meetingName': 'discovery',
                'availability': 'January 1, 2025'
            },
            {
                'meetingName': 'review',
                'availability': 'January 1, 2025'
            },
            {
                'meetingName': 'solutions',
                'availability': 'January 1, 2025'
            },
            {
                'meetingName': 'requirements',
                'availability': 'January 1, 2025'
            },
            {
                'meetingName': 'retrospective',
                'availability': 'January 1, 2025'
            }
        ]
    );
    const [scheduleComplete, setScheduleComplete] = useState(false);
    const [interviewId, setInterviewId] = useState(['Interview Id']);
    
    const handleComplete = (e) => {
        alert('Add interview form complete');
        // e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const dataJson = Object.fromEntries(formData);

        console.log(dataJson);

        let schedules = [];
        let hasSchedules = dataJson["Analysis Interview Availability"] && dataJson["Discovery Interview Availability"] && dataJson["Review Interview Availability"]
                                && dataJson["Solutions Interview Availability"] && dataJson["Requirements Interview Availability"] && dataJson["Retrospective Interview Availability"];

        console.log("hasSchedules: " + hasSchedules);
        if(hasSchedules){
            schedules.push({ 'type': 'Analysis', 'schedule': dataJson["Analysis Interview Availability"] }),
            schedules.push({ 'type': 'Discovery', 'schedule': dataJson["Discovery Interview Availability"] }),
            schedules.push({ 'type': 'Review', 'schedule': dataJson["Review Interview Availability"] }),
            schedules.push({ 'type': 'Solutions', 'schedule': dataJson["Solutions Interview Availability"] }),
            schedules.push({ 'type': 'Requirements', 'schedule': dataJson["Requirements Interview Availability"] }),
            schedules.push({ 'type': 'Retrospective', 'schedule': dataJson["Retrospective Interview Availability"] })
        }

        const dataObj = {
            interviewScheduleId: "InterviewSchedule-" + crypto.randomUUID(),
            interviewDocumentId: interviewId[0],
            interviewSchedules: hasSchedules ? schedules : [dataJson["Interview Availability"]],
            interviewScheduleIsActive: true
        }

        setInterviewScheduleFormData(dataObj);
        console.log(dataObj);
        setIsFormComplete(true);
    }

    function buttonClick() {
        alert('complete add interview schedule form');
        setScheduleComplete(true);
    }

    let schedule = 
            <div className="bg-slate-100 m-[2.5%] w-full flex items-center shadow-10 text-gray-700 rounded-sm">
                <IoIosCalendar className="textInputImage" />
                <label for="Interview Availability" className="m-[2.5%] font-bold"> Schedule Interview </label>
                <input name="Interview Availability"  type="datetime-local" placeholder="Interview date" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />
            </div>;

    function meetingScheduleElement(meetingName){
        return(
            <div className="bg-slate-100 m-[2.5%] w-full flex items-center shadow-10 text-gray-700 rounded-sm">
                <IoIosCalendar className="textInputImage" />
                <label for={meetingName + " Interview Availability"} className="m-[2.5%] font-bold"> Schedule Interview {meetingName} </label>
                <input name={meetingName + " Interview Availability"}  type="datetime-local" placeholder="Interview date" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />
            </div>
        );
    }

    let meetingsList = [];
    if(meetings){
        const meetingsElements = meetings.map(meeting => meetingScheduleElement(meeting.meetingName));
        meetingsList = 
            <div className="w-full">
                { meetingsElements }
            </div>;
    }

    let schedulerContent = 
        <div className="componentDiv">
            <form method="post" action onSubmit={handleComplete} className="w-full mx-10% items-center justify-evenly">
                <div className="bg-slate-100 flex flex-col m-[2.5%] justify-center">
                    { hasMeetings ? meetingsList : schedule }
                    <div className="w-full bg-slate-500"> 
                        <div className="m-[2.5%]"><Survey /></div>
                    </div>
                    <div className="m-[2.5%] items-center">
                        <button type="submit" onClick={ buttonClick } className="button"> Schedule </button> <br />
                    </div>
                </div>
            </form>
        </div>;

    return(
        <div className="bg-slate-100 m-[2.5%] w-full flex flex-col items-center justify-evenly">
            <div className="bg-slate-100 m-[2.5%] w-full flex flex-col items-center justify-evenly">
                <MdCalendarToday className="color-gray-400 c w-[20%] h-[20%]"/>
                <h1 className="text-2xl items-center"> Scheduler </h1>
            </div>
            <div className="bg-green-300 w-full h-auto m-[2.5%] flex items-center shadow-md justify-evenly rounded-lg">
                <div className="bg-green-100 w-full m-[2.5%] rounded-lg">
                    <p className="pageTitle"> Client Availability </p>
                    <div className="w-auto h-auto bg-slate-100">
                        <p className="text-black text-md font-bold"> { clientAvailability.meetingName + ": " + clientAvailability.availability } </p>
                    </div>
                </div>
                <div className="w-full m-[2.5%]">
                    <p className="pageTitle"> Analyst Availability </p>
                    <div className="w-auto h-auto bg-slate-100">
                        { analystAvailability.map(availability => <p className="text-black text-md font-bold"> { availability.meetingName + ": " + availability.availability } </p>) }
                    </div>
                </div>
            </div>
            { !isFormComplete ? schedulerContent : <SaveDataValues type={ saveTypes[0] } url={ serviceUrl } data={ interviewScheduleFormData }/> }
        </div>
    );
}

export default InterviewScheduler;