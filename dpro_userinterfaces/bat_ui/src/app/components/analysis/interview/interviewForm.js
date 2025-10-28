import { useState } from "react";
import FormHelper from "@/app/helpers/formHelper.js";
import Button from "@/app/components/elements/button.js";
import InterviewScheduler from "./interviewScheduler";

const InterviewForm = () => {

    const [interviewInfo, setInterviewInfo] = useState();

    return(
        <div className="w-full"> 
            <div className="bg-slate-100 m-[2.5%] w-full flex items-center">
                <p className="text-xl text-black text-bold text-center"> Interview Info </p>
            </div>
            <div className="bg-slate-100 m-[2.5%] w-full flex items-center">
                <p name="Interview Participants" className="text-black text-bold" ></p>
                <input name="Participant" type="text" placeholder="Participant" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />
            </div>
            <div className="bg-slate-100 m-[2.5%] w-full flex items-center">
                <InterviewScheduler />
            </div>
        </div>
    );
}

export default InterviewForm;