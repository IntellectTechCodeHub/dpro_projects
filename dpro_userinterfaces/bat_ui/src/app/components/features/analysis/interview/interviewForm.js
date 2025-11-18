import { useState } from "react";
import FormHelper from "@/app/helpers/formHelper.js";
import Button from "@/app/components/elements/button.js";
import InterviewScheduler from "./interviewScheduler.js";


const InterviewForm = () => {

    const [interviewInfo, setInterviewInfo] = useState();

    return(
        <div className="w-full"> 
            <div className="bg-slate-100 m-[2.5%] flex items-center">
                <p className="text-xl text-black text-bold text-center"> Interview Info </p>
            </div>
            <div className="bg-slate-100 m-[2.5%] w-full flex flex-col items-center">
                <p name="Interview Participants" className="text-black text-bold" ></p>
                <div className="bg-slate-100 m-[2.5%] w-full flex flex-col items-center shadow-10 text-gray-700 rounded-sm">
                    <div className="w-full"><input name="Participant" type="text" placeholder="Participant" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" /></div>
                    <div className="w-full"><input name="Participant Contact" type="email" placeholder="Email Address" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" /></div>
                    <div className="w-full"><input name="Interview Name" type="text" placeholder="Interview Name" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" /></div>
                    <div className="w-full"><input name="Interview Description" type="text" placeholder="Description" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" /></div>
                </div>
                <div className="bg-slate-100 m-[2.5%] w-full flex items-center shadow-10 text-gray-700 rounded-sm">
                    <label for="Attendee" className="m-[2.5%] text-sm text-bold">Add an attendee</label>
                    <select id="Attendee" name="Attendee" placeholder="Attendee" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm"> 
                        <option value="1">User</option>
                    </select>
                </div>
            </div>
            <InterviewScheduler />
        </div>
    );
}

export default InterviewForm;