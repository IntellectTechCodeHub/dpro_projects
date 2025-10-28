// import libraries
'use client';

import { useState } from "react";
import InterviewForm from "./interviewForm.js"
import InterviewScheduler from "./interviewScheduler.js";

const InterviewModule = () => {
    const interview = [
        {},
        {},
        {}
    ];

    var [pageContentInterviewModule, setPageContentInterviewModule] = useState(<div></div>);
    var [userPriviledges, setUserPriviledges] = useState([]);

    function getAccess() {

        // retrieve from state
        // var userAccess = state.userPriviledges;
        return true;
    }

    // var isAnalystRole = getAccess();
    // var useSchedule = isSchedulerEnabled();

    return (
        <div className="flex flex-col text-black text-extrabold items-center justify-evenly">
            <div> <InterviewForm /> </div>
        </div>
    );
}

export default InterviewModule;