import React from "react";
import { IoMdCompass } from "react-icons/io";

const Survey = () => {
    
    function buttonClick(){
        console.log("button");
    }

    let content;

    let surveyArray = [{id: "survey", name: "Process analysis survey 1", date: "January 1, 2025", actionLink: "#", action: "update notes", status: "complete"}];
    let surveyForm = 
            <div className="w-full items-center justify-evenly">
                <div className="buttonDiv">
                    <button type="button" onClick={ buttonClick } className="button"> Send Survey </button> <br />
                </div>
                <div className="bg-slate-100 m-[2.5%] flex items-center shadow-10 text-gray-700 rounded-sm">
                    <IoMdCompass className="textInputImage" />
                    <label for="surveyPicker" className="m-[2.5%] text-sm font-bold"> Choose a survey </label>
                    <select id="surveyPicker" name="surveyPicker" className="selectInput">
                        <option value="1">Process discovery survey</option>
                    </select>
                </div>
            </div>;
    
        const surveys = surveyArray.map(survey => <li key={survey.id} className="tableListItem"> { survey.name + ' | ' + survey.date + ' | ' + <a href={survey.actionLink}> survey.action </a> + ' | ' + survey.status }  </li>)
        
        content = 
            <div className="tableDiv">
                <p className="tableName"> Existing Surveys </p>
                <ul className="tableLists"> { surveys } </ul>
            </div>;
    }

    return( 
        <div className="w-full">
            { surveyForm }
            { content }
        </div>
    );
}
export default Survey;