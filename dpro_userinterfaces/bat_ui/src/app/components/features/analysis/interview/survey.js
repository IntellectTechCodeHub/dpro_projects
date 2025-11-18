import React from "react";

export const Survey = () => {
    
    function buttonClick(){
        console.log("button");
    }

    let surveyArray = [{id: "survey", name: "Process analysis survey 1", date: "January 1, 2025", actionLink: "#", action: "update notes", status: "complete"}];
    let surveyForm = 
            <div className="w-[90%] items-center justify-evenly">
                <div className="m-[2.5%] items-center">
                    <button type="button" onClick={ buttonClick } className="w-full h-[50px] text-black border-3 outline-none hover:bg-green-100 p-2 rounded-sm"> Send Survey </button> <br />
                </div>
                <div className="bg-slate-100 m-[2.5%] flex items-center shadow-10 text-gray-700 rounded-sm">
                    <label for="surveyPicker" className="m-[2.5%] text-sm text-bold"> Choose a survey</label>
                    <select id="surveyPicker" name="surveyPicker" className="w-full h-[50] mr-[10%] text-gray hover:bg-blue-200 rounded-sm">
                        <option value="1">Process discovery survey</option>
                    </select>
                </div>
            </div>;
            
    let pageContent = 
            <div className="w-full">
                <div>
                    {surveyForm}
                </div>
                <div className="w-full mt-[10%] text-black text-xsm items-center justify-evenly">
                    { 
                        surveyArray.map(survey => {
                            return <p key={survey.id}>{survey.name} | {survey.date} | <a href={survey.actionLink}> {survey.action}</a> | {survey.status}</p>
                        })                 
                    }
                </div>
            </div>;

    return( 
        <div className="w-full">
            { pageContent }
        </div>
    );
}