"use client"; 

import { useState } from "react";
import { IoMdArrowDown, IoMdInformation, IoMdLaptop } from "react-icons/io";
import ProcessDiagram from '../workflow/processDiagram.js';
import { ProcessNodesContext } from '../workflow/processNodesContext.tsx';
import SaveDataValues from "../../data save/savedatavalues.js";

let getActionInfo = (actionData, actionDecision, actionMeeting,
                    actionFiling, actionPhone, actionMessage) => {
    let actionInfoString = [];
    if(actionData) 
        actionInfoString.push('data');
    if(actionDecision)
        actionInfoString.push('decision');
    if(actionMeeting)
        actionInfoString.push('meeting');
    if(actionFiling)
        actionInfoString.push('filing');
    if(actionPhone)
        actionInfoString.push('phone');
    if(actionMessage)
        actionInfoString.push('message');
    return actionInfoString;
}

const arrow =
    <div className='w-full h-20 m-[1%] shadow-green-500 shadow-sm'>
        <IoMdArrowDown className='processArrow' />
    </div>;

const processDiv = (processName, processDescription, processDateCreated) => {
    return(
        <div className="w-full flex">
            <div className='w-auto h-32 m-[1%] rounded-lg bg-gray-300 shadow-green-900 drop-shadow-sm'>
                <p className='processInfo'> 
                    { processName }
                </p>
                <p className='processInfo'>
                    { processDescription }
                </p>
                <p className='processInfo'>
                    { processDateCreated }
                </p>
            </div>
            <div className='processArrow'>
                { arrow }
            </div>
        </div>
    );
}

const actionDiv = (actionData, actionDecision, actionMeeting, actionFiling, actionPhone, actionMessage) => {
    return(
        <div className='flex flex-col w-auto h-20 m-[1%] rounded-lg bg-slate-700 shadow-green-900 drop-shadow-sm'>
            <p className="actionInfoText"> 
                Actions include process tasks:
            </p>
            { 
                getActionInfo(actionData, actionDecision, actionMeeting,
                    actionFiling, actionPhone, actionMessage)
                .map(info => { 
                        return <p className='actionInfoText'> info </p> 
                    })
            }
        </div>
    );
}

let ProcessActionsInput = (inputNum) => {
    return(
        <div className='flex flex-col w-full items-center'>
            <p className='text-lg text-slate-900 font-mono font-semibold'>Process: { inputNum }</p>
            <div className='textInputDiv'>
                <IoMdLaptop className='textInputImage' />
                <input name={ 'Process Name ' + inputNum } type='text' placeholder='provide a process name' className='textInput' />
            </div>
            <div className='textInputDiv'>
                <IoMdInformation className='textInputImage' />
                <textarea name={ 'Process Description ' + inputNum} placeholder='describe the process' className='textInput' maxLength={500}/>
            </div>
            <div className='flex'>
                <div className='flex flex-col p-2'>
                    <p className='workflowInputPanelTitle'> Actions </p>
                    <div className='checkboxDiv'>
                        <input name={ 'Data ' + inputNum } type='checkbox' className='checkboxInput' />
                        <p className='w-full text-sm'> data </p>
                    </div>
                    <div className='checkboxDiv'>
                        <input name={ 'Decision ' + inputNum } type='checkbox' className='checkboxInput' />
                        <p className='w-full text-sm'> decision </p>
                    </div>
                    <div className='checkboxDiv'>
                        <input name={ 'Meeting ' + inputNum } type='checkbox' className='checkboxInput' />
                        <p className='w-full text-sm'> meeting </p>
                    </div>
                </div>
                <div className='flex flex-col p-2'>
                    <div className='checkboxDiv'>
                        <input name={ 'Filing ' + inputNum } type='checkbox' className='checkboxInput' />
                        <p className='w-full text-sm'> filing </p>
                    </div>
                    <div className='checkboxDiv'>
                        <input name={ 'Phone ' + inputNum } type='checkbox' className='checkboxInput' />
                        <p className='w-full text-sm'> phone </p>
                    </div>
                    <div className='checkboxDiv'>
                        <input name= { 'Message ' + inputNum } type='checkbox' className='checkboxInput' />
                        <p className='w-full text-sm'> message </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const serviceUrl = process.env.NEXT_PUBLIC_SERVICE_URL + 'workflow';

const Workflow = () => {

    let saveTypes = ['Workflow'];

    const processes = [
        { processInputNumber: '1', processType: 'main' },
        { processInputNumber: '2', processType: 'sub-process' },
        { processInputNumber: '3', processType: 'sub-process' }
    ];
    const [nodesQuery, setNodesQuery] = useState([ 
        { 
            processInfo: { processId: '000-000-000', processName: 'request info', processDescription: 'request healthcare records' },
            actions: [{ actionInfo: { actionId: '000-000-000', actionName: 'check health files', actionDescription: 'search and retrieve' }}],
            relationships: [{ p0: '000-000-100', p1: '000-100-100' }] 
        },
        {
            processInfo: { processId: '000-000-000', processName: 'send info', processDescription: 'send a secure healthcare record' }, process: processDiv('', '', ''),
            actions: [{ actionInfo: { actionId: '000-000-000', actionName: 'send healthcare info', actionDescription: 'send healthcare info via secure transfer' }}], 
            relationships: [{ p0: '000-000-100', p1: '000-100-100' }]    
        } 
    ]);
    // const [business, setBusiness] = useState({ businessInfo: {} });
    // const [useCase, setUseCase] = useState({ useCaseInfo:{}  });
    const [nodes, setNodes] = useState([ 
        { 
            process: processDiv(nodesQuery[0].processInfo.processName, nodesQuery[0].processInfo.processDescription, '01-01-2026'),
            action: actionDiv(true, true, true, true, true, true)
        },
        { 
            process: processDiv(nodesQuery[1].processInfo.processName, nodesQuery[1].processInfo.processDescription, '01-01-2026'),
            action: actionDiv(false, false, false, false, false)
        }
    ]);
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [workflowIsComplete, setWorkflowIsComplete] = useState();
    const [workflowFormData, setWorkflowFormData] = useState([]);
    const [processInputs, setProcessInputs] = useState([
        ProcessActionsInput(processes[0].processInputNumber),
        ProcessActionsInput(processes[1].processInputNumber),
        ProcessActionsInput(processes[2].processInputNumber)
    ]);

    if(nodes === undefined){
        throw new Error('workflow nodes are undefined.');
    }

    console.log('nodes: ' + nodes[0].process);

    let handleComplete = (e) => {
        e.preventDefault();
        alert('form complete');

        const form = e.target;
        const formData = new FormData(form);
        const dataJson = Object.fromEntries(formData);
        console.log(dataJson);
        
        let count = processes[0].processInputNumber;
        let processCount = processInputs.length;
        while(count <= processCount){
            const dataObject = {
                workflowId: 'Workflow-' + crypto.randomUUID(),
                workflowDocumentId: '000-000-000',
                processName: dataJson['Process Name ' + count.toString() ],
                processDescription: dataJson['Process Description ' + count.toString() ],
                processDateCreated: '01-01-2026',
                processIsActive: true,
                actionData: dataJson['Data ' + count.toString() ] == 'on' ? true : false,
                actionDecision: dataJson['Decision ' + count.toString() ] == 'on' ? true : false,
                actionMeeting: dataJson['Meeting ' + count.toString() ] == 'on' ? true : false,
                actionFiling: dataJson['Filing ' + count.toString() ] == 'on' ? true : false,
                actionPhone: dataJson['Phone ' + count.toString() ] == 'on' ? true : false,
                actionMessage: dataJson['Message ' + count.toString() ] == 'on' ? true : false
            }

            let newArray = workflowFormData;
            newArray.push(dataObject);
            setWorkflowFormData(newArray);

            let newNode = {
                process: processDiv(dataObject.processName, 
                    dataObject.processDescription, 
                    dataObject.processDateCreated),
                action: actionDiv(dataObject.actionData, dataObject.actionDecision, dataObject.actionMeeting, 
                                    dataObject.actionFiling, dataObject.actionPhone, dataObject.actionMessage)

            }
            
            nodes.push(newNode);

            count++;
        }

        setIsFormComplete(true);
        let newArray = nodes;
        setNodes(newArray);
    }

    let buttonClick = () => {
        alert('button click');
        setWorkflowIsComplete(true);
    }

    const WorkflowContent =
        <div className='workflowDiv'>
            <div className='workflowInputPanel'>
                <p className='workflowInputPanelTitle'>Process Info</p>
                <form method='post' action onSubmit={handleComplete} className='w-full p-7'>
                    <div className='componentDiv'>
                        { 
                            processInputs && !isFormComplete ? processInputs.map(processAction => <div className='w-full'> { processAction } </div>) 
                                : <div><p> processes added </p></div> 
                        }
                        {/* { 
                            !isFormComplete ? <p className='text-sm text-center font-semibold font-mono'> Add one or more process descriptions. </p> 
                                : <SaveDataValues type={saveTypes[0]} url={serviceUrl} data={workflowFormData ?? workflowFormData[0] } /> 
                        } */}
                        
                        <div className='buttonDiv'>
                            <button type='submit' onClick={buttonClick} className='button'> Complete </button> <br />
                        </div>
                    </div>
                </form>
            </div>
            <div className='workflowModellingPanel'>
                <p className='workflowModellingPanelTitle'> Workflow Modelling Screen </p>
                <div className='workflowInfoDiv'> 
                    <p className='m-[2.5%] text-black text-center text-lg items-center justify-evenly'>Business and Use Case</p>
                    {/* <div className='workflowBusiness'> { business.businessInfo } </div>
                    <div className='workflowUseCase'> { useCase.useCaseInfo } </div> */}
                </div>
                <div className='min-w-full max-w-3xl h-auto m-[2.5%] bg-green-200'>
                    <ProcessNodesContext.Provider value={ nodesQuery }>
                        <ProcessDiagram nodes={nodes} />
                    </ProcessNodesContext.Provider>
                    <p className='text-center'> Process </p>
                </div>
                <div className='w-full items-center justify-center'>
                    <p className='m-[2.5%] text-mono text-xs text-semibold text-slate-900 text-center'> (C) Copyright 2026 | All rights reserved | DiscoverPRO Workflow Editor (TM) by Intellect Tech, LLC </p>
                </div>
            </div>
        </div>;
    return(<div className='w-full h-auto items-center justify-center'>  { WorkflowContent } </div>);
}
export default Workflow;