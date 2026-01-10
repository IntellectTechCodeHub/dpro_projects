import { useState } from "react";
import { MdCheck } from "react-icons/md";
import SaveDataValues from "./data save/savedatavalues.js";

let serviceUrl = process.env.NEXT_PUBLIC_SERVICE_URL + 'interview/review';

export default function ReviewForm() {
    
    let saveTypes = ["Review"];

    const [reviewType, setReviewType] = useState(['Interview Review']);
    const [reviewFormData, setReviewFormData] = useState();
    const [isFormComplete, setIsFormComplete] = useState(false); 
    const [reviewComplete, setReviewComplete] = useState(false);
    const [reviewAnalyst, setReviewAnalyst] = useState(['Compliance Analyst']);
    const [interviewId, setInterviewId] = useState(['Interview Id']);

    console.log(reviewType[0]);

    function handleComplete(e) {
        //e.preventDefault();
        alert('review form complete');
        const form = e.target;
        const formData = new FormData(form);
        const dataJson = Object.fromEntries(formData);
        console.log(dataJson);

        let reviewItems = [];
        let hasReview = dataJson["Infrastructure"] && dataJson["Architecture Types"] && dataJson["Recommended Services"] 
                            && dataJson["Functional Requirements"] && dataJson["Goals"];
        
        if(hasReview){
            reviewItems.push({ 'item': 'infra', 'review': dataJson["Infrastructure"] });
            reviewItems.push({ 'item': 'architect', 'review': dataJson["Architecture Types"] });
            reviewItems.push({ 'item': 'services', 'review': dataJson["Recommended Services"] });
            reviewItems.push({ 'item': 'functions', 'review': dataJson["Functional Requirements"] });
            reviewItems.push({ 'item': 'goals', 'review': dataJson["Goals"] });
        }

        const dataObj = {
            reviewId: 'InterviewReview-' + crypto.randomUUID(),
            interviewDocumentId: interviewId[0],
            reviewName: reviewType[0],
            reviewDescription: reviewType[0] + ' by ' + reviewAnalyst[0],
            reviewItem: reviewItems,
            reviewDecision: dataJson["Decision"],
            reviewCreatedDate: '01-01-2025',
            reviewCompletedDate: '01-01-2025',
            reviewStatus: 'new',
            reviewIsActive: true
        }

        setReviewFormData(dataObj);
        console.log(dataObj);
        setIsFormComplete(true);
    }

    const buttonClick = () => {
        alert(reviewType.toLower() + ' complete');
        setReviewComplete(true);
    }

    let pageContent = <div></div>;
    
    let expertSuggestions, requirements, goals = [];

    let suggestions = 
        <div className="componentDiv">
            <div className="textInputDiv">
                <label for="Infrastructure" className="m-[2.5%] font-bold">Infrastructure</label>
                <input name="Infrastructure" type="text" className="textInput" placeholder="What are the infrastructure requirements?" />
            </div>
            <div className="textInputDiv">
                <label for="Architecture Types" className="m-[2.5%] font-bold">Architecture</label>
                <input name="Architecture Types" type="text" className="textInput" placeholder="Describe the applicapable architecture types" />
            </div>
            <div className="textInputDiv">
                <label for="Recommended Services" className="m-[2.5%] font-bold">Services</label>
                <input name="Recommended Services" type="text" className="textInput" placeholder="Describe the recommended services" />
            </div>
        </div>;

    let solutions = 
        <div className="componentDiv">
            <div className="textInputDiv">
                <label for="Functional Requirements" className="m-[2.5%] font-bold">Requirements</label>
                <input name="Functional Requirements" type="text" className="textInput" placeholder="What are the functional requirements?" />
            </div>
            <div className="textInputDiv">
                <label for="Goals" className="m-[2.5%] font-bold">Goals</label>
                <input name="Goals" type="text" className="textInput" placeholder="List the goals for the solution" />
            </div>
        </div>;
    
    if(reviewType[0] == 'Interview Analyst Review'){
        pageContent = 
            <form method="post" action onSubmit={handleComplete} className="formDiv">
                <div className="componentDiv">
                    <p name="analyst" className="pageTitle"> Analyst Info </p>
                </div>
                <div className="inputTextDiv">
                    <label for="Approval Notes" className="m-[2.5%] font-bold"> Add notes for the analyst approval </label>
                    <input name="Approval Notes" type="text" placeholder="Share notes for the analyst" className="inputText" />
                </div>
                <div className="bg-slate-100 m-[2.5%] w-full flex items-center justify">
                    <MdCheck className="mx-[2.5%] w-[25%] h-[25%]"/>
                    <p className="m-[2.5%] text-extrabold"> Decision </p>
                    <label className="w-full m-[2.5%] text-black text-extrabold text-center"> Approve </label> <input name="Review Decision" type="radio" className="text-gray w-full h-[25] m-[2.5%] hover:bg-blue-200" />
                    <label className="w-full m-[2.5%] text-black text-extrabold text-center"> Decline </label> <input name="Review Decision" type="radio" className="text-gray w-full h-[25] m-[2.5%] hover:bg-blue-200" />
                </div>
                <div className="buttonDiv">
                    <button type="submit" onClick={ buttonClick } className="button"> Complete </button> <br />
                </div>
        </form>;
    }
    else if(reviewType[0] == 'Interview Review'){
        pageContent = 
            <form method="post" action onSubmit={handleComplete} className="formDiv">
                { suggestions }
                { solutions }
                <div className="selectInputDiv">
                    <MdCheck className="mx-[2.5%] w-[25%] h-[25%]"/>
                    <p className="m-[2.5%] text-extrabold"> Decision </p>
                    <label className="w-full m-[2.5%] text-black text-extrabold text-center"> Approve </label> <input name="Decision" type="radio" className="text-gray w-full h-[25] m-[2.5%] hover:bg-blue-200" />
                    <label className="w-full m-[2.5%] text-black text-extrabold text-center"> Decline </label> <input name="Decision" type="radio" className="text-gray w-full h-[25] m-[2.5%] hover:bg-blue-200" />
                </div>
                <div className="buttonDiv">
                    <button type="submit" onClick={ buttonClick } className="button"> Complete </button> <br />
                </div>
            </form>;
    }

    return (
        <div className="bg-slate-100 m-[2.5%] flex flex-col w-full h-auto items-center justify-evenly">
            { !isFormComplete ? pageContent : <SaveDataValues type={ saveTypes[0] } url={ serviceUrl } data={ reviewFormData } /> }
        </div>
    );
}