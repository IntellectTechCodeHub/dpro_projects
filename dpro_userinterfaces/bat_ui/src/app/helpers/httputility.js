const HttpUtility = (urlDomainsList) => {

    let urlDomains;

    function getBusinessHttpUrl(domainUrlString, dataObject){

        let urlString = domainUrlString + "?" +
            "businessId=" + dataObject.businessId + "&" +
            "businessName=" + dataObject.name + "&" +
            "businessDescription=" + dataObject.description + "&" +
            "businessCreatedDate=" + dataObject.createdDate + "&" +
            "businessIsActive=" + dataObject.isActive;

            return urlString;  
    }

    function getArchitectureHttpUrl(domainString){

    }
    
    function getGoveranceHttpUrl(domainString){

    }

    function getComplianceHttpUrl(domainString){

    }

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

            if(domainObjectType.data.intakeId !== undefined)
                urlString = getIntakeUrlString(domainObjectType.url, domainObjectType.data);

            if(dataObject.problemId !== undefined)
                urlString = getProblemUrlString(urlString, dataObject);

            if(dataObject.solutionId !== undefined)
                    urlString = getSolutionUrlString(urlString, dataObject);

            return urlString;
    }

export function formatUrl(domainObjectType, url, dataObject) {
        console.log(domainObjectType);

        let httpUrl;
        switch(domainObjectType.type){
            // 0 The interview feature starts analysis with problem and solution definitions.

            case 'Analysis':
                var urls = [];
                if(domainObjectType.data.analysisId !== undefined)
                    httpUrl = getAnalysisHttpUrl(domainObjectType.url, domainObjectType.data);
                return httpUrl;
                break;
            
            // 1 The request to begin an analysis starts with the intake request.

            case 'Intake Request':
                var urls = [];
                if(domainObjectType.data.intakeRequestId !== undefined)
                    httpUrl = getIntakeRequestHttpUrl(domainObjectType.url, domainObjectType.data);
                return httpUrl;
                break;

            // 2 Assign an analyst for the intake request.

            case 'Analyst':
                if(domainObjectType.data.analystId !== undefined)
                    httpUrl = getAnalystHttpUrl(domainObjectType.url, domainObjectType.data);
                return httpUrl;

            // 3 The analyst sets an interview schedule using the availibility from the intake request.

            case 'Interview Schedule':
                if(domainObjectType.data.interviewScheduleId !== undefined)
                    httpUrl = getInterviewScheduleUrlString(domainObjectType.url, domainObjectType.data);
                return httpUrl;

            // 4 The interview is completed with information gathering.

            case 'Interview':
                if(domainObjectType.data.interviewId !== undefined)
                    httpUrl = getInterviewHttpUrl(domainObjectType.url, domainObjectType.data);
                return httpUrl;
                break;

            // 5 The analysis interview is reviewed then approved or declined.

            case 'Review':
                if(domainObjectType.data.reviewId !== undefined)
                    httpUrl = getReviewHttpUrl(domainObjectType.url, domainObjectType.data);
                return httpUrl;
            default:
                break;
        }   
    }
export default HttpUtility;