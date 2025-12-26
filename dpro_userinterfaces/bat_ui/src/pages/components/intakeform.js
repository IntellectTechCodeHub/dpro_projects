import { useState } from "react";
import { IoMdContact, IoIosPhonePortrait, IoIosCalendar, IoMdRefresh, IoMdPeople } from "react-icons/io";
import SaveDataValues from "./data save/savedatavalues";

let serviceUrl = "http://localhost:3000/interview/intake";

export default function IntakeForm() {

    let saveTypes = ["Intake Request"];

    const [requests, setRequests] = useState([]);
    const [intakeFormData, setIntakeFormData] = useState();
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [intakeComplete, setIntakeComplete] = useState(false); 
    

    function handleComplete(e) {
       // e.preventDefault();
        alert('intake form complete');
        const form = e.target;
        const formData = new FormData(form);
        const dataJson = Object.fromEntries(formData);
        console.log(dataJson);
        
        const dataObj = {
            intakeRequestId: "IntakeRequest" + "-" + crypto.randomUUID(),
            intakeType: dataJson["Intake Type"],
            intakeMeetings: dataJson["Meetings"],
            intakeContact: dataJson["Contact Name"],
            intakePhone: dataJson["Contact Phone"],
            intakeAvailibility: dataJson["Interview Availability"],
            intakePrivacy: dataJson["Privacy"] == "on" ? true : false,
            intakeCreatedDate: '01-01-2025',
            intakeCompletedDate: '01-01-2025',
            intakeStatus: 'new',
            intakeIsActive: true
        };

        setIntakeFormData(dataJson);
        console.log(dataObj);
        setIsFormComplete(true);
    }

    const buttonClick = () => {
        alert("intake form complete");
        setIntakeComplete(true);
    }

    const privacyClick = () => {
        alert('The privacy agreement is between the requesting party, the owners and operators of the software you are currently using.'
            + 'You are agreeing to license your business information for the purpose of coordinating research analysis and developing a'
            + 'solution proposal for tech services including but not limited to cloud data and artificial intelligence.');
    }

    let pageContent = 
        <form method="post" action onSubmit={handleComplete} className="formDiv">
            <div className="pageTitleDiv">
                <h3 className="pageTitle"> Complete Request Form </h3>
            </div>
            <div className="selectInputDiv">
                <IoMdRefresh className="textInputImage" />
                <select id="Intake Type" name="Intake Type" className="selectInput">
                    <option value={1}> client participation </option>
                    <option value={2}> expert recommendations </option>
                </select>
            </div>
            <div className="selectInputDiv">
                <IoMdPeople className="textInputImage" />
                <select id="Meeting" name="Meeting" className="selectInput" multiple>
                    <option value={1}> research analysis </option>
                    <option value={2}> discovery </option>
                    <option value={3}> solution review </option>
                    <option value={4}> architecture review </option>
                    <option value={5}> goverance policies </option>
                    <option value={6}> compliance assessment </option>
                    <option value={7}> data maturity assessment </option>
                </select>
            </div>
            <div className="textInputDiv">
                <IoMdContact className="textInputImage" />
                <input name="Contact Name" type="text" placeholder="Contact name" className="textInput" />
            </div>
            <div className="textInputDiv">
                <IoIosPhonePortrait className="textInputImage" />
                <input name="Contact Phone" type="text" placeholder="Phone" className="textInput" />
            </div>
            <div className="dateInputDiv">
                <IoIosCalendar className="textInputImage" />
                <label for="Interview Availability" className="m-[2.5%] text-sm font-bold items-center">Availability</label>
                <input name="Interview Availability" type="datetime-local" placeholder="Availability" className="dateInput" />
            </div>
            <div className="checkboxDiv">
                <input name="Privacy" type="checkbox" className="checkboxInput" />
                <p className="w-full text-black text-extrabold"> I accept the <a onClick={ privacyClick } className="text-blue-400 text-extrabold"> Privacy Agreement </a>. </p>
            </div>
            <div className="buttonDiv">
                <button type="submit" onClick={ buttonClick } className="button"> Complete </button> <br />
            </div>
        </form>;

    return (
        <div className="componentDiv">
            { !isFormComplete ? pageContent : <SaveDataValues type={ saveTypes[0] } url={ serviceUrl } data={ intakeFormData } /> }
        </div>
    );
}