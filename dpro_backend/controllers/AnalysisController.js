const AnalysisController = (operation, query, updateObject) => {

    const getUpdateObjectValues = (query) => {
            var searchRecordId, updateObj;

            if(query.analysisDocumentId){
            
                searchRecordId = { "_id": query.analysisDocumentId };
            
                updateObj = {
                    "analysisId": query.analysisId,
                    "name": query.name,
                    "requestor": query.requestorId,
                    "analystId": query.analystId,
                    "scheduledDate": query.scheduledDate,
                    "createdDate": query.createdDate,
                    "completedDate": query.completedDate,
                    "status": query.status,
                    "isActive": query.isActive,
                    "problems": []
                };
            }
        
            if(query.analysisDocumentId && (query.problemDocumentId || query.problemId)){
                updateObj = updateAnalysis_addProblem(query, updateObj);
            }

            return {searchRecordId, updateObj};
    };

    const updateAnalysis_addProblem = (query, updateObj) => {
        if (typeof(query.problemDocumentId) === "object" || typeof(query.problemId) === "object"){
            var arrayLength = query.problemCount;
            for(var i = 0; i <= arrayLength - 1; i++ ){
                updateObj.problems.push(
                {
                    "problemId": query.problemId !== undefined && query.problemId.length >= i ? query.problemId[i] : undefined,
                    "name": query.problemName !== undefined && query.problemName.length >= i ? query.problemName[i] : undefined,
                    "description": query.problemDescription !== undefined && query.problemDescription.length >= i ? query.problemDescription[i] : undefined,
                    "suggestions": query.problemSuggestions !== undefined && query.problemSuggestions.length >= i ? query.problemSuggestions[i] : undefined,
                    "createdDate": query.problemCreatedDate !== undefined && query.problemCreatedDate.length >= i ? query.problemCreatedDate[i] : undefined,
                    "isResolved": query.problemIsResolved !== undefined && query.problemIsResolved.length >= i ? query.problemIsResolved[i] : undefined,
                    "isActive": query.problemIsActive !== undefined && query.problemIsActive.length >= i ? query.problemIsActive[i] : undefined
                });
            }
        }
        else {
            updateObj.problems.push(
            
                {
                    "problemId": query.problemId,
                    "name": query.problemName,
                    "description": query.problemDescription,
                    "suggestions": query.problemSuggestions,
                    "createdDate": query.problemCreatedDate,
                    "isResolved": query.problemIsResolved,
                    "isActive": query.problemIsActive
                });
        }
        return updateObj;

   };

   switch(operation){
        case "Update Analysis":
            return getUpdateObjectValues(query);
        
        default:

    }
};

export default AnalysisController;