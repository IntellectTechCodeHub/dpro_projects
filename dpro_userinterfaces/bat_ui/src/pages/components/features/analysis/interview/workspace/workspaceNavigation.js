import React from "react";
import { useState } from "react";
import { IoMdCreate, IoMdInformation, IoMdCalendar, IoMdGlasses, IoMdPersonAdd } from "react-icons/io";
import { ButtonGroup, ButtonGroupItem } from "../../../../../../app/components/ui/button-group/button-group.tsx";

export default function WorkspaceNavigation() {
    let links = [{address: '#', id: 1}, {address: '#', id: 2}, {address: '#', id: 3}];

    let [interviewPageType, setInterviewPageType] = useState();
    let [intakeComplete, setIntakeComplete] = useState(false); 
    let [analystComplete, setAnalystComplete] = useState(false);
    let [scheduleComplete, setScheduleComplete] = useState(false);
    let [interviewComplete, setInterviewComplete] = useState(false);
    let [reviewComplete, setReviewComplete] = useState(false);
    let [selectionType, setSelectionType] = useState();


    let buttonClick = () => {
        alert('navigate to scheduler');
        setInterviewPageType('scheduler');
        console.log(interviewPageType);
    }

    let intakeClicked = () => {
        alert('intake button clicked');
        setIntakeComplete(!intakeComplete);
        setSelectionType('Intake');
    }

    let analystClicked = () => {
        alert('analyst button clicked');
        setAnalystComplete(!analystComplete);
        setSelectionType('Analyst');
    }

    let scheduleClicked = () => {
        alert('schedule button clicked');
        setScheduleComplete(!scheduleComplete);
        setSelectionType('Schedule');
    }

    let interviewClicked = () => {
        alert('interview button clicked');
        setInterviewComplete(!interviewComplete);
        setSelectionType('Interview');
    }

    let reviewClicked = () => {
        alert('review button clicked');
        setReviewComplete(!reviewComplete);
        setSelectionType('Review');
    }

    let buttonClick_navGroup = () => {
        alert('navigate to ...');
    }

    let navContent = 
        <div className="bg-slate-200 flex flex-col w-full items-center justify-evenly">
            <div className="text-bold text-lg">
                <div className="flex m-[2.5%] items-center justify-evenly">
                    <ButtonGroup selectedKeys={[]} selectionMode="single" onSelectionChange={ buttonClick_navGroup }>
                        <ButtonGroupItem isDisabled={ intakeComplete ? true : false } isSelected={ selectionType == 'Create'} id="step1" iconLeading={ IoMdCreate } onClick={ intakeClicked }> intake </ButtonGroupItem>
                        <ButtonGroupItem isDisabled={ intakeComplete ? false : true } isSelected={ selectionType == 'Analyst'} id="step2" iconLeading={ IoMdPersonAdd } onClick={ analystClicked }> analyst </ButtonGroupItem>
                        <ButtonGroupItem isDisabled={ analystComplete ? false : true } isSelected={ selectionType == 'Schedule' ? true : false } id="step3" iconLeading={ IoMdCalendar } onClick={ scheduleClicked }> schedule </ButtonGroupItem>
                        <ButtonGroupItem isDisabled={ scheduleComplete ? false : true } isSelected={ selectionType == 'Interview' ? true : false } id="step4" iconLeading={ IoMdInformation } onClick={ interviewClicked }> interview </ButtonGroupItem>
                        <ButtonGroupItem isDisabled={ interviewComplete ? false : true } isSelected={ selectionType == 'Review' ? true : false } id="step5" iconLeading={ IoMdGlasses } onClick={ reviewClicked }> review </ButtonGroupItem>
                    </ButtonGroup>
                </div>
                <div className="text-black text-bold text-md m-[2.5%]">
                    <h3 className="font-bold text-sm text-green-700"> How-to use this navigation instructions </h3>
                    <p className='text-sm'>
                        Complete each step in the analysis interview workflow. After finalizing requirements for each step the next step is enabled. For example after completing the intake process, the analyst selector is enabled, and so on until the review step is complete.
                    </p>
                </div>
            </div>
        </div>;
    
    return (
     navContent
    );
}