// Db connection parameters

export const testDbName = 'AGTest';

// Server port

export const testServerPort = '3000';

// Telemetry event types

export const telemetryEvent = 'Telemetry Event';

// Log data objects for API routers

export const logAnalysisAPIPostRequest = {
    "logId": 'Analysis-Router-POST-Request-' + crypto.randomUUID(),
    "name": 'analysis application interface',
    "type": 'feature',
    "subType": 'analysis API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Analysis application interface received a POST request.'
};
export const logAnalysisAPIGetRequest = {
    "logId": 'Analysis-Router-GET-Request-' + crypto.randomUUID(),
    "name": 'analysis application interface',
    "type": 'feature',
    "subType": 'analysis API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Analysis application interface received a GET request.'
};
export const logAnalysisAPIPatchRequest = {
    "logId": 'Analysis-Router-PATCH-Request-' + crypto.randomUUID(),
    "name": 'analysis application interface',
    "type": 'feature',
    "subType": 'analysis API router',
    "eventDate": Date.now(),
    "logTime": Date.now().toString(),
    "process": 'Analysis application interface received a Patch request.' 
};
export const logAnalysisProblemAPIPostRequest = {
    "logId": 'Analysis-Problem-Router-POST-Request' + crypto.randomUUID(),
    "name": 'analysis problem application interface',
    "type": 'feature',
    "subType": 'analysis API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Analysis problem application interface received a POST request.'
};
export const logAnalysisProblemAPIGetRequest = {
    "logId": 'Analysis-Problem-Router-GET-Request-' + crypto.randomUUID(),
    "name": 'analysis problem application interface',
    "type": 'feature',
    "subType": 'analysis API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Analysis problem application interface received a GET request.'
};
export const logAnalysisProblemAPIPatchRequest = {
    "logId": 'Analysis-Problem-Router-PATCH-Request-' + crypto.randomUUID(),
    "name": 'analysis problem application interface',
    "type": 'feature',
    "subType": 'analysis API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Analysis problem application interface received a PATCH request.'
};
export const logAnalysisSolutionAPIPostRequest = {
    "logId": 'Analysis-Solution-Router-POST-Request-' + crypto.randomUUID(),
    "name": 'Analysis solution application interface',
    "type": 'feature',
    "subType": 'analysis API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Analysis solution application interface received a POST request.'
};
export const logAnalysisSolutionAPIGetRequest = {
    "logId": 'Analysis-Solution-Router-GET-Request-' + crypto.randomUUID(),
    "name": 'analysis solution application interface',
    "type": 'feature',
    "subType": 'analysis API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Analysis solution application interface received a GET request.'
};
export const logAnalysisSolutionAPIPatchRequest = {
    "logId": 'Analysis-Solution-Router-PATCH-Request-' + crypto.randomUUID(),
    "name": 'analysis solution application interface',
    "type": 'feature',
    "subType": 'analysis API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Analysis application interface received a PATCH request.'
};
export const logArchitectureAPIPostRequest = {
    "logId": 'Architecture-Router-POST-Request-' + crypto.randomUUID(),
    "name": 'architecture application interface',
    "type": 'feature',
    "subType": 'architecture API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Architecture application interface received a POST request.'
};
export const logArchitectureAPIGetRequest = {
    "logId": 'Architecture-Router-GET-Request-' + crypto.randomUUID(),
    "name": 'architecture application interface',
    "type": 'feature',
    "subType": 'architecture API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Architecture application interface received a GET request.'
};
export const logArchitecturePatchRequest = {
    "logId": 'Architecture-Router-PATCH-Request-' + crypto.randomUUID(),
    "name": 'architecture application interface',
    "type": 'feature',
    "subType": 'architecture API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Architecture application interface received a PATCH request.'
};
export const logArchitectureDataFlowAPIPostRequest = {
    "logId": 'Architecture-Data-Flow-Router-POST-Request-' + crypto.randomUUID(),
    "name": 'architecture data flow application interface',
    "type": 'feature',
    "subType": 'architecture API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Architecture data flow application interface received a POST request.'
};
export const logArchitectureDataFlowAPIGetRequest = {
    "logId": 'Architecture-Data-Flow-Router-GET-Request-' + crypto.randomUUID(),
    "name": 'architecture data flow application interface',
    "type": 'feature',
    "subType": 'architecture API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Architecture data flow application interface received a GET request.'
};
export const logArchitectureDataCatalogAPIPostRequest = {
    "logId": 'Architecture-Data-Catalog-Router-POST-Request-'+ crypto.randomUUID(),
    "name": 'architecture data catalog application interface',
    "type": 'feature',
    "subType": 'architecture API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'application interface received a POST request.'
};
export const logArchitectureDataCatalogAPIGetRequest = {
    "logId": 'Architecture-Data-Catalog-Router-GET-Request-' + crypto.randomUUID(),
    "name": 'architecture data catalog application interface',
    "type": 'feature',
    "subType": 'architecture API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Architecture data catalog application interface received a GET request.'
};
export const logArchitectureDataSourceAPIPostRequest = {
    "logId": 'Architecture-Data-Source-Router-POST-Request-' + crypto.randomUUID(),
    "name": 'architecture data source application interface',
    "type": 'feature',
    "subType": ' architecture API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Architecture data source application interface received a POST request.'
};
export const logArchitectureDataSourceAPIGetRequest = {
    "logId": 'Architecture-Data-Source-Router-GET-Request-' + crypto.randomUUID(),
    "name": 'architecture data source application interface',
    "type": 'feature',
    "subType": 'architecture API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Architecture data source application interface received a GET request.'
};
export const logBusinessAPIPostRequest = {
    "logId": 'Business-Router-POST-Request-' + crypto.randomUUID(),
    "name": 'business application interface',
    "type": 'feature',
    "subType": 'business API router',
    "eventDate": Date.now(),
    "logTime": Date.now().toString(),
    "process": 'Business application interface received a POST request.'
};

export const logBusinessAPIGetRequest = {
    "logId": 'Business-Router-GET-Request-' + crypto.randomUUID(),
    "name": 'business application interface',
    "type": 'feature',
    "subType": 'business API router',
    "eventDate": Date.now(),
    "logTime": Date.now().toString(),
    "process": 'Business application interface received a GET request.'
};

export const logBusinessAPIPatchRequest = {
    "logId": 'Business-Router-PATCH-Request-' + crypto.randomUUID(),
    "name": 'business application interface',
    "type": 'feature',
    "subType": 'business API router',
    "eventDate": Date.now(),
    "logTime": Date.now().toString(),
    "process": 'Business application interface received a PATCH request.'
};

export const logComplianceAPIPostRequest = {
    "logId": 'Compliance-Router-POST-Request-' + crypto.randomUUID(),
    "name": 'compliance application interface',
    "type": 'feature',
    "subType": 'compliance API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Compliance application interface received a POST request.'
};
export const logComplianceAPIGetRequest = {
    "logId": 'Compliance-Router-GET-Request-' + crypto.randomUUID(),
    "name": 'compliance application interface',
    "type": 'feature',
    "subType": 'compliance API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Compliance application interface received a GET request.'
};
export const logComplianceAPIPatchRequest = {
    "logId": 'Compliance-Router-PATCH-Request-' + crypto.randomUUID(),
    "name": "compliance application interface",
    "type": 'feature',
    "subType": 'compliance API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Compliance application interface received a PATCH request.'
};
export const logGovernanceAPIPostRequest = {
    "logId": 'Governance-Router-POST-Request-' + crypto.randomUUID(),
    "name": 'governance application interface',
    "type": 'feature',
    "subType": 'governance API Router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Governance application interface received a POST request.'
};
export const logGovernanceAPIGetRequest = {
    "logId": 'Governance-Router-GET-Request-' + crypto.randomUUID(),
    "name": 'governance application interface',
    "type": 'feature',
    "subType": 'governance API Router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Governance application interface received a GET request.'
};
export const logGovernanceAPIPatchRequest = {
    "logId": 'Governance-Router-PATCH-Request-' + crypto.randomUUID(),
    "name": 'governance application interface',
    "type": 'feature',
    "subType": 'governance API Router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Governance application interface received a PATCH request.'
};
export const logGovernancePolicyAPIPostRequest = {
    "logId": 'Governance-Policy-Router-POST-Request-' + crypto.randomUUID(),
    "name": 'governance policy application interface',
    "type": 'feature',
    "subType": 'governance API Router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Governance policy application interface received a POST request.'
};
export const logGovernancePolicyAPIGetRequest = {
    "logId": 'Governance-Policy-Router-GET-Request-' + crypto.randomUUID(),
    "name": 'goverance policy application interface',
    "type": 'feature',
    "subType": 'governance API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Governance policy application interface received a GET request.'

};
export const logGovernancePolicyAPIPatchRequest = {    
    "logId": 'Governance-Policy-Router-PATCH-Request-' + crypto.randomUUID(),
    "name": 'governance policy application interface',
    "type": 'feature',
    "subType": 'governance API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Governance Policy application interface received a PATCH request.'

};
export const logGovernanceRegulatingBodyAPIPostRequest = {
    "logId": 'Governance-Regulating-Body-Router-POST-Request-' + crypto.randomUUID(),
    "name": 'governance regulating body application interface',
    "type": 'feature',
    "subType": 'governance API Router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'governance regulating body application interface received a POST request.'
};
export const logGovernanceRegulatingBodyAPIGetRequest = {
    "logId": 'Governance-Regulating-Body-Router-GET-Request-' + crypto.randomUUID(),
    "name": 'governance regulating body application interface',
    "type": 'feature',
    "subType": 'governance API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Governance regulating body application interface received a GET request.'
};
export const logGovernanceRegulatingBodyAPIPatchRequest = {
    "logId": 'Governance-Regulating-Body-Router-PATCH-Request-' + crypto.randomUUID(),
    "name": 'governance regulating body application interface',
    "type": 'feature',
    "subType": ' API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Governance regulating body application interface received a PATCH request.'
};
export const logGovernanceRegulationAPIPostRequest = {
    "logId": 'Governance-Regulating-Body-Router-POST-Request-' + crypto.randomUUID(),
    "name": 'governance regulating body application interface',
    "type": 'feature',
    "subType": 'governance regulating body API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'governance regulating body application interface received a POST request.'
};
export const logGovernanceRegulationAPIGetRequest = {
    "logId": 'Governance-Regulation-Router-GET-Request-' + crypto.randomUUID(),
    "name": 'governance regulation application interface',
    "type": 'feature',
    "subType": 'governance API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Governance regulation application interface received a GET request.'
};
export const logGovernanceRegulationAPIPatchRequest = {
    "logId": 'Governance-Regulation-Router-PATCH-Request-' + crypto.randomUUID(),
    "name": 'governance regulation application interface',
    "type": 'feature',
    "subType": 'governance API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Governance regulation application interface received a PATCH request.'
};
export const logInterviewAPIPostRequest = {
    "logId": 'Interview-Router-POST-Request-' + crypto.randomUUID(),
    "name": 'intervew application interface',
    "type": 'feature',
    "subType": 'interview API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Interview application interface received a POST request.'
};
export const logInterviewAPIGetRequest = {
    "logId": 'Interview-Router-GET-Request-' + crypto.randomUUID(),
    "name": 'interview application interface',
    "type": 'feature',
    "subType": 'interview API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Interview application interface received a GET request.'
};
export const logInterviewAPIPatchRequest = {
    "logId": 'Interview-Router-PATCH-Request-' + crypto.randomUUID(),
    "name": 'interview application interface',
    "type": 'feature',
    "subType": 'interview API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Interview application interface received a PATCH request.'
};
export const logInterviewReviewAPIPostRequest = {
    "logId": 'Interview-Review-Router-POST-Request-' + crypto.randomUUID(),
    "name": 'application interface',
    "type": 'feature',
    "subType": 'interview API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Interview review application interface received a POST request.'
};
export const logInterviewReviewAPIGetRequest = {
    "logId": 'Interview-Review-Router-GET-Request-' + crypto.randomUUID(),
    "name": 'interview review application interface',
    "type": 'feature',
    "subType": 'interview API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Interview review application interface received a GET request.'
};
export const logInterviewReviewAPIPatchRequest = {
    "logId": 'Interview-Review-Router-PATCH-Request-' + crypto.randomUUID(),
    "name": 'interview review application interface',
    "type": 'feature',
    "subType": 'interview API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Interview application interface received a PATCH request.'
};
export const logAssessmentAPIPostRequest = {
    "logId": 'Assessment-Router-POST-Request-' + crypto.randomUUID(),
    "name": 'assessment application interface',
    "type": 'feature',
    "subType": 'assessment API Router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Assessment application interface received a POST request.'
};
export const logAssessmentAPIGetRequest = {
    "logId": 'Assessment-Router-GET-Request-' + crypto.randomUUID(),
    "name": 'assessment application interface',
    "type": 'feature',
    "subType": 'assessment API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Assessment application interface received a GET request.'
};
export const logAssessmentAPIPatchRequest = {
    "logId": 'Assessment-Router-PATCH-Request-' + crypto.randomUUID(),
    "name": 'assessment application interface',
    "type": 'feature',
    "subType": 'assessment API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Assesmment application interface received a PATCH request.'
};
export const logUseCaseAPIPostRequest = {
    "logId": 'Use-Case-Router-POST-Request-' + crypto.randomUUID(),
    "name": 'use case application interface',
    "type": 'feature',
    "subType": 'use case API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Use case application interface received a POST request.'
};
export const logUseCaseAPIGetRequest = {
    "logId": 'Use-Case-Router-GET-Request-' + crypto.randomUUID(),
    "name": 'use case application interface',
    "type": 'feature',
    "subType": 'use case API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Use case application interface received a GET request.'
};
export const logUseCaseAPIPatchRequest = {
    "logId": 'Use-Case-Router-PATCH-Request-' + crypto.randomUUID(),
    "name": 'use case application interface',
    "type": 'feature',
    "subType": 'use case API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Use case application interface received a PATCH request.'
};
export const logUserAPIPostRequest = {
    "logId": 'User-Router-POST-Request-' + crypto.randomUUID(),
    "name": 'user application interface',
    "type": 'feature',
    "subType": 'user API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'User application interface received a POST request.'
};
export const logUserAPIGetRequest = {
    "logId": 'User-Router-GET-Request-' + crypto.randomUUID(),
    "name": 'user application interface',
    "type": 'feature',
    "subType": 'user API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'User application interface received a GET request.'
};
export const logUserAPIPatchRequest = {
    "logId": 'User-Router-PATCH-Request-' + crypto.randomUUID(),
    "name": 'user application interface',
    "type": 'feature',
    "subType": 'user API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'User application interface received a PATCH request.'
};
export const logUserByValueAPIGetRequest = {
    "logId": 'User-Value-Router-GET-Request-' + crypto.randomUUID(),
    "name": 'user value application interface',
    "type": 'feature',
    "subType": 'user API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'User by value application interface received a GET request.'
};
export const logUserAPIDeleteRequest = {
    "logId": 'User-Router-DELETE-Request-' + crypto.randomUUID(),
    "name": 'user application interface',
    "type": 'feature',
    "subType": 'user API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'User application interface received a DELETE request.'
};
export const logWorkflowAPIPostRequest = {
    "logId": 'Workflow-Router-POST-Request-' + crypto.randomUUID(),
    "name": 'workflow application interface',
    "type": 'feature',
    "subType": 'workflow API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Workflow application interface received a POST request.'
};
export const logWorkflowAPIGetRequest = {
    "logId": 'Workflow-Router-GET-Request-' + crypto.randomUUID(),
    "name": 'workflow application interface',
    "type": 'feature',
    "subType": 'workflow API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Workflow application interface received a GET request.'
};
export const logWorkflowAPIPatchRequest = {
    "logId": 'Workflow-Router-PATCH-Request-' + crypto.randomUUID(),
    "name": 'workflow application interface',
    "type": 'feature',
    "subType": 'workflow API router',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'Workflow application interface received a PATCH request.'
};

// Log data objects for specific server actions

export const logWebAPIServerAppStart = {
    "logId": 'Web-API-Server-App-Start-' + crypto.randomUUID(),
    "name": 'app start',
    "type": 'system',
    "subType": 'web API server',
    "eventDate": Date.now().toString(),
    "logTime": Date.now().toString(),
    "process": 'The dpro web server has started and is currently hosted on port ' + testServerPort + "."
};