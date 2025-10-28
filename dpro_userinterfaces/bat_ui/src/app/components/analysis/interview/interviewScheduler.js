import React from "react";

const InterviewScheduler = () => {

    return(
        <div className="bg-slate-100 m-[2.5%] w-full flex items-center"> 
            <p> Scheduler </p>
            <div className="bg-slate-100 m-[2.5%] w-full flex items-center shadow-10 text-gray-700 rounded-sm">
                <p className="m-[2.5%] text-extrabold"> Schedule Interview 1</p>
                <input name="Interview" type="date" placeholder="Interview date" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm" />
            </div>
        </div>
    );
}

export default InterviewScheduler;