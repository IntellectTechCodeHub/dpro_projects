const HttpUtility = (urlDomainsList) => {
    let urlDomains;
}

function getBusinessHttpUrl(domainUrlString, dataObject){
    let urlString = domainUrlString + "?" +
            "businessId=" + dataObject.businessId + "&" +
            "businessName=" + dataObject.name + "&" +
            "businessDescription=" + dataObject.description + "&" +
            "businessCreatedDate=" + dataObject.createdDate + "&" +
            "businessIsActive=" + dataObject.isActive;
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
        let urlString = domainUrlString + "&" + 
            "solutionId=" + dataObject.solutionId + "&" +
            "solutionName" + dataObject.name + "&" +
            "solutionDescription=" + dataObject.description + "&" +
            "analysisDocumentId=" + dataObject.analysisDocumentId + "&" +
            "problemDocumentId=" + dataObject.problemDocumentId + "&" +        
            "solutionCreatedDate=" + dataObject.createdDate + "&" +
            "solutionCompletedDate=" + dataObject.solutionCompletedDate + "&" +
            "solutionIsComplete=" + dataObject.solutionIsComplete + "&" +
            "solutionIsActive=" + dataObject.isActive;
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

            if(dataObject.problemId !== undefined)
                urlString = getProblemUrlString(urlString, dataObject);

            if(dataObject.solutionId !== undefined)
                urlString = getSolutionUrlString(urlString, dataObject);

            return urlString;
}

export function formatUrl(domainObjectType, url, dataObject) {
        let httpUrl;
        switch(domainObjectType.type){
            case 'Business':
                if(domainObjectType.data.businessId !== undefined)
                    httpUrl = getBusinessHttpUrl(domainObjectType.url, domainObjectType.data);
                return httpUrl;
                break;
            case 'Analysis':
                if(domainObjectType.data.analysisId !== undefined)
                    httpUrl = getAnalysisHttpUrl(domainObjectType.url, domainObjectType.data);
                return httpUrl;
                break;
            default:
                break;
        }   
    }
export default HttpUtility;