const HttpUtility = (urlDomainsList) => {

    let urlDomains;

    function getArchitectureHttpUrl(domainString){

    }
    
    function getGoveranceHttpUrl(domainString){

    }

    function getComplianceHttpUrl(domainString){

    }

}

    function getSigninUserUrl(domainUrlString, dataObject) {
        let urlString = domainUrlString + "?" +
            "userEmail=" + dataObject.email + "&" +
            "userPassword=" + dataObject.pass; 
        return urlString;
    }

    function getSigninUserAuthenticationUrl(domainUrlString, dataObject) {
        let urlString = domainUrlString + "?" +
                    "userAuthenticationId=" + dataObject.userAuthenticationId + "&" +
                    "userDocumentId=" + dataObject.userDocumentId + "&" +
                    "signinEmail=" + dataObject.signinEmail + "&" +
                    "signinPass=" + dataObject.signinPass + "&" +
                    "userAuthenticated=" + dataObject.userAuthenticated + "&" +
                    "userAuthenticationCreatedDate=" + dataObject.userAuthenticationCreatedDate + "&" +
                    "userAuthenticationIsActive=" + dataObject.userAuthenticationIsActive;
        return urlString;
    }

    function getBusinessHttpUrl(domainUrlString, dataObject) {
        console.log(domainUrlString);
        console.log(dataObject);

        let businessIndustriesString, businessWorkflowsString = "";

        // for(let index = 0; index < dataObject.businessIndustries.length; index++){
        //     businessIndustriesString = "businessIndustry=" + dataObject.businessIndustries[index] + "&";
        // }

        // for(let index = 0; index < dataObject.businessWorkflows.length; index++){
        //     businessWorkflowsString = "businessWorkflow=" + dataObject.businessWorkflow[index] + "&";
        // }

        let urlString = domainUrlString + "?" +
            "businessId=" + dataObject.businessId + "&" +
            "businessDocumentId=" + dataObject.businessDocumentId + "&" +
            "businessName=" + dataObject.businessName + "&" +
            "businessDescription=" + dataObject.businessDescription + "&" +
            "businessPhone=" + dataObject.businessPhone + "&" +
            "businessCity=" + dataObject.businessCity + "&" + 
            "businessState=" + dataObject.businessState + "&" +
            "businessCreatedDate=" + dataObject.businessCreatedDate + "&" +
            "businessIsActive=" + dataObject.businessIsActive + "&" +
            "businessInfoProtection=" + dataObject.businessInfoProtection + "&" +
            "businessIndustry=" + dataObject.businessIndustry;
            //businessIndustriesString +
            //businessWorkflowsString;
            console.log(urlString);
            return urlString;
    }

    function getWorkflowHttpUrl(domainUrlString, dataObject){
        console.log(domainUrlString);
        console.log(dataObject);

        let urlString = domainUrlString + "?" +
            "workflowId=" + dataObject.workflowId + "&" +
            "businessDocumentId=" + dataObject.businessDocumentId + "&" +
            "workflowName=" + dataObject.workflowName + "&" + 
            "workflowDescription=" + dataObject.workflowDescription + "&" +
            "processName=" + dataObject.processName + "&" +
            "processDescription=" + dataObject.processDescription + "&" + 
            "processCreatedDate=" + dataObject.processCreatedDate + "&" +
            "processIsActive=" + dataObject.processIsActive + "&" +
            "actionData=" + dataObject.actionData + "&" +
            "actionDecision=" + dataObject.actionDecision + "&" +
            "actionMeeting=" + dataObject.actionMeeting + "&" +
            "actionFiling=" + dataObject.actionFiling + "&" +
            "actionPhone=" + dataObject.actionPhone + "&" +
            "actionMessage=" + dataObject.actionMessage;
        
        return urlString;
    }

    function getAnalystHttpUrl(domainUrlString, dataObject){
        console.log(domainUrlString);
        console.log(dataObject);

        let availabilityString = "";

        for (let index = 0; index < dataObject.analystAvailability.length; index++) {
            availabilityString += "analystAvailability=" + dataObject.analystAvailability[index] + "&";
        }

        let urlString = domainUrlString + "?" +
            "analystId=" + dataObject.analystId + "&" +
            "analystUserDocumentId=" + dataObject.analystUserDocumentId + "&" +
            "analysisDocumentId=" + dataObject.analysisDocumentId + "&" +
            "analystName=" + dataObject.analystName + "&" +
            "analystEmail=" + dataObject.analystEmail + "&" +
            "analystPhone=" + dataObject.analystPhone + "&" + 
            "analystRole=" + dataObject.analystRole + "&" +
            availabilityString +
            "analystIndustry=" + dataObject.analystIndustry + "&" +
            "analystDateAdded=" + dataObject.analystDateAdded + "&" +
            "analystIsActive=" + dataObject.analystIsActive;
        return urlString;
    }

    function getInterviewScheduleUrlString(domainUrlString, dataObject){
        console.log(domainUrlString);
        console.log(dataObject);

        let schedulesString = "";

        for (let index = 0; index < dataObject.interviewSchedules.length; index++) {
             schedulesString += "interviewSchedules=" + dataObject.interviewSchedules[index] + "&";
        }

        let urlString = domainUrlString + "?" + 
            "interviewScheduleId=" + dataObject.interviewScheduleId + "&" +
            "interviewDocumentId=" + dataObject.interviewDocumentId + "&" +
            schedulesString +
            "interviewScheduleIsActive=" + dataObject.interviewScheduleIsActive;
        return urlString;
    }

    function getReviewHttpUrl(domainUrlString, dataObject){
        console.log(domainUrlString);
        console.log(dataObject);
        let urlString = domainUrlString + "?" +
            "reviewId=" + dataObject.reviewId + "&" +
            "interviewDocumentId=" + dataObject.interviewDocumentId + "&" +
            "reviewName=" + dataObject.reviewName + "&" +
            "reviewDescription=" + dataObject.reviewDescription + "&" +
            "reviewItems=" + dataObject.reviewItem[0].item + ": " + dataObject.reviewItem[0].review + "&" +
            "reviewDecision=" + dataObject.reviewDecision + "&" +
            "reviewCreatedDate=" + dataObject.reviewCreatedDate + "&" +
            "reviewCompletedDate=" + dataObject.reviewCompletedDate + "&" +
            "reviewStatus=" + dataObject.reviewStatus + "&" +
            "reviewIsActive=" + dataObject.reviewIsActive;
        return urlString;
    }

    function getInterviewHttpUrl(domainUrlString, dataObject){
        console.log(domainUrlString);
        console.log(dataObject);
        let urlString = domainUrlString + "?" +
            "interviewId=" + dataObject.interviewId + "&" +
            "analysisDocumentId=" + dataObject.analysisDocumentId + "&" +
            "interviewName=" + dataObject.interviewName + "&" +
            "interviewDescription=" + dataObject.interviewDescription + "&" +
            "interviewAttendeeId=" + dataObject.interviewAttendeeId + "&" +
            "interviewCreatedDate=" + dataObject.interviewCreatedDate + "&" +
            "interviewCompletedDate=" + dataObject.interviewCompletedDate + "&" +
            "interviewIsComplete=" + dataObject.interviewIsComplete + "&" +
            "interviewIsActive=" + dataObject.interviewIsActive + "&" +
            "assessments=" + dataObject.assessments[0].assess + ": " + dataObject.assessments[0].assessment;
        return urlString; 
    }

    function getProblemUrlString(domainUrlString, dataObject){
        let urlString = domainUrlString + "&" + 
            "problemId=" + dataObject.problemId + "&" + 
            "problemName=" + dataObject.problemName + "&" +
            "problemDescription=" + dataObject.problemDescription + "&" +
            "problemCreatedDate=" + dataObject.problemCreatedDate + "&" + 
            "problemIsResolved=" + dataObject.problemIsResolved + "&" +
            "problemIsActive=" + dataObject.problemIsActive;
            return urlString;
    }

    function getSolutionUrlString(domainUrlString, dataObject){
        let urlString = "&" + 
            "solutionId=" + dataObject.solutionId + "&" +
            "solutionName=" + dataObject.name + "&" +
            "solutionDescription=" + dataObject.description + "&" +
            "analysisDocumentId=" + dataObject.analysisDocumentId + "&" +
            "problemDocumentId=" + dataObject.problemDocumentId + "&" +        
            "solutionCreatedDate=" + dataObject.createdDate + "&" +
            "solutionCompletedDate=" + dataObject.solutionCompletedDate + "&" +
            "solutionIsComplete=" + dataObject.solutionIsComplete + "&" +
            "solutionIsActive=" + dataObject.isActive;
            return urlString;
    }

    function getIntakeRequestHttpUrl(domainUrlString, dataObject){
        console.log(domainUrlString);
        console.log(dataObject);
        let urlString = domainUrlString + "?" +
            "intakeRequestId=" + dataObject.intakeRequestId + "&" +
            "intakeType=" + dataObject.intakeType + "&" +
            "intakeMeetings=" + dataObject.intakeMeetings + "&" +
            "intakeContact=" + dataObject.intakeContact + "&" +
            "intakePhone=" + dataObject.intakePhone + "&" +
            "intakeAvailability=" + dataObject.intakeAvailability + "&" +
            "intakePrivacy=" + dataObject.intakePrivacy + "&" +
            "intakeCreatedDate=" + dataObject.intakeCreatedDate + "&" +
            "intakeCompletedDate=" + dataObject.intakeCompletedDate + "&" +  
            "intakeStatus=" + dataObject.intakeStatus + "&" +
            "intakeIsActive=" + dataObject.intakeIsActive;
            return urlString;
    }

    function getAnalysisHttpUrl(domainUrlString, dataObject){
        let urlString = domainUrlString + "?" +
            "analysisId=" + dataObject.analysisId + "&" +
            "workflowDocumentId=" + dataObject.workflowId + "&" +
            "name=" + dataObject.name + "&" +
            "requestorId=" + dataObject.requestorId + "&" +
            "analystId=" + dataObject.analystId + "&" +
            "scheduledDate=" + dataObject.scheduledDate + "&" +
            "createdDate=" + dataObject.createdDate + "&" + 
            "completedDate=" + dataObject.completedDate + "&" +
            "status=" + dataObject.status + "&" +
            "isActive=" + Boolean(dataObject.isActive);

            if(dataObject.intakeId !== undefined)
                urlString = getIntakeUrlString(url, dataObject);

            if(dataObject.problemId !== undefined)
                urlString = getProblemUrlString(urlString, dataObject);

            if(dataObject.solutionId !== undefined)
                    urlString = getSolutionUrlString(urlString, dataObject);

            return urlString;
    }

export function formatUrl(domainObjectType, url, dataObject) {

        let httpUrl;
        switch(domainObjectType){

            // The signin component verifies a user is the database and saves an auth document.

            case 'Signin User':
                if(dataObject.email !== undefined )
                    httpUrl = getSigninUserUrl(url, dataObject);
                return httpUrl;
                break;

            case 'Signin User Authentication':
                if(dataObject.userAuthenticationId !== undefined)
                    httpUrl = getSigninUserAuthenticationUrl(url, dataObject);
                return httpUrl;
                break;
            
            // The business feature highlights DiscoverPRO Anify and Verta with a business info input form.

            case 'Business':
                if(dataObject.businessId !== undefined)
                    httpUrl = getBusinessHttpUrl(url, dataObject);
                return httpUrl;
                break;
            
            // The workflow feature diagrams the core process and action descriptions.

            case 'Workflow':
                if(dataObject[0].workflowId !== undefined)
                    httpUrl = getWorkflowHttpUrl(url, dataObject[0]);
                return httpUrl;
                break; 

            // The interview feature starts analysis with problem and solution definitions.
            
            case 'Analysis':
                var urls = [];
                if(dataObject.analysisId !== undefined)
                    httpUrl = getAnalysisHttpUrl(url, dataObject);
                return httpUrl;
                break;
            
            // The request to begin an analysis starts with the intake request.

            case 'Intake Request':
                var urls = [];
                if(dataObject.intakeRequestId !== undefined)
                    httpUrl = getIntakeRequestHttpUrl(url, dataObject);
                return httpUrl;
                break;

            // Assign an analyst for the intake request.

            case 'Analyst':
                if(dataObject.analystId !== undefined)
                    httpUrl = getAnalystHttpUrl(url, dataObject);
                return httpUrl;

            // The analyst sets an interview schedule using the availibility from the intake request.

            case 'Interview Schedule':
                if(dataObject.interviewScheduleId !== undefined)
                    httpUrl = getInterviewScheduleUrlString(url, dataObject);
                return httpUrl;

            // The interview is completed with information gathering.

            case 'Interview':
                if(dataObject.interviewId !== undefined)
                    httpUrl = getInterviewHttpUrl(url, dataObject);
                return httpUrl;
                break;

            // The analysis interview is reviewed then approved or declined.

            case 'Review':
                if(dataObject.reviewId !== undefined)
                    httpUrl = getReviewHttpUrl(url, dataObject);
                return httpUrl;
            default:
                break;
        }   
    }
export default HttpUtility;