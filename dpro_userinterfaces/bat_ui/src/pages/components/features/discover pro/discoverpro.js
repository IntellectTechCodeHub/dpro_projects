'use client';

import { useState } from 'react';
import Register from '../../register.js';
import Signin from '../../signin.js';
import Business from '../business.js';
import Workflow from '../workflow/workflow.js';
import InterviewModule from '../analysis/interview/interviewModule.js';


const DiscoverPro = () => {
    let [user, setUser] = useState();
    let [isUserSignedIn, setIsUserSignedIn] = useState(true);
    let [isUserRegisterComplete, setIsUserRegisterComplete] = useState(true);
    let [hasSavedBusiness, setHasSavedBusiness] = useState(false);
    let [hasWorkflowProcess , setHasWorkflowProcess] = useState(false);
    let [addBusinessRequest, setAddBusinessRequest] = useState(false);
    let [addProcessRequest, setAddProcessRequest] = useState(false);
    let [hasResearchInterview, setHasResearchInterview] = useState(false);
    let [addResearchInterviewRequest, setResearchInterviewRequest] = useState(false);
    

    
    let DpContent = () => {

        let contentButtonClick = () => {
            alert('content button clicked');
            console.log(isUserRegisterComplete);
            console.log(isUserSignedIn);
            console.log(hasSavedBusiness);
            console.log(hasWorkflowProcess);
        }

        
        let dpContentButton = (dpContentString) => {
        
            return(
                <button className='button' onClick={contentButtonClick}> { dpContentString } </button>
            );
        }

        let dpContent =
            <div className='w-full h-auto'>
                { 
                    !isUserSignedIn && !isUserRegisterComplete ? 
                            <div className='componentDiv'> {dpContentButton('Complete registration? Now sign-in.')} 
                                <div> <Register onComplete={ () => setIsUserRegisterComplete(true) } /> </div>
                            </div>
                            : <div></div>
                }
                {
                    !isUserSignedIn && isUserRegisterComplete ?
                            <div className='componentDiv'> {dpContentButton('Signed-in? Now add a business.')} 
                                <div> <Signin onComplete={ () => setIsUserSignedIn(true) } /> </div>
                            </div>
                            : <div></div>
                }
                {
                    (!hasSavedBusiness && isUserSignedIn) || addBusinessRequest ?
                            <div className='componentDiv'> {dpContentButton('Use the workflow diagram tool.')} 
                                <div> <Business hasBusiness={hasSavedBusiness === true} onComplete={ () => setHasSavedBusiness(true) }/> </div>
                            </div>
                            : <div></div>
                }
                {
                    (!hasWorkflowProcess && hasSavedBusiness) || addProcessRequest ?
                            <div className='componentDiv'> {dpContentButton('Got Processes? Now begin a research interview.')} 
                                <div> <Workflow onComplete={ () => setHasWorkflowProcess(true) } /> </div>
                            </div>
                            : <div></div>
                }
                {
                    (!hasResearchInterview && hasWorkflowProcess) || addResearchInterviewRequest ?
                            <div className='componentDiv'> {dpContentButton('Finished the interview? Now begin an assessment.')} 
                                <div> <InterviewModule onComplete={ () => setHasResearchInterview(true) } /> </div>
                            </div>
                            : <div></div>
                }

            </div>;
        

        return (dpContent);
    }

    return(
      <DpContent />  
    );
}

export default DiscoverPro;