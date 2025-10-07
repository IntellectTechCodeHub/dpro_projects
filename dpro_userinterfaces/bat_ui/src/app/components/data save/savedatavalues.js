'use client';

import React, { useState, useEffect } from 'react';

export default function SaveDataValues(url, data) {
    const [saveDataValues, setSaveDataValues] = useState();
    const [saveDataError, setSaveDataError] = useState();
    const [saveHasData, setSaveHasData] = useState(false);

    let isSaving = true;
    let isComplete, hasSent, hasReturnValue, hasError = false;
    
    let dataReturn, dataResults, dataErr;

    let dataObject = data;

    function formatUrl() {
        let urlString = url + "?" +
            "businessId=" + dataObject.businessId + "&" +
            "businessName=" + dataObject.name + "&" +
            "businessDescription=" + dataObject.description + "&" +
            "businessCreatedDate=" + dataObject.createdDate + "&" +
            "businessIsActive=" + dataObject.isActive;

            return urlString;    
    }

    async function saveData(apiUrl, dataObject) {
        hasSent = true;
        try {
            let options = {
                method: 'post',
                header: {
                    "Accept": 'applications/json, text/plain, "/"',
                    "Content-Type": 'application/json' 
                },
                body: JSON.stringify(dataObject)
            };

            dataReturn = await fetch(apiUrl, options)
                            .then((res) => res.json())
                            .catch((e) => e.message);
            //setSaveDataValues(dataReturn);
            setSaveHasData(dataReturn !== undefined && dataReturn !== null);
        }
        catch (error) {
            hasError = true;
            dataErr = error;
            setSaveDataError(error.message);
        }
    }

    url = formatUrl();

    useEffect(() => {
        dataResults = saveData(url, dataObject);
    }), ([!hasSent]);

    function SaveData() {
        return(
            <div className='flex w-full h-screen mt-[4.5%] p-10 items-center justify-evenly'>
                <h1 className='text-2xl items-center'> Save Data: </h1>
                <div className='flex flex-col text-lg items-center'>
                    { saveHasData ? <div> complete... {saveDataValues} </div> : ""}
                    { isSaving && !saveHasData && !hasError ? <div> saving... </div> : "" }
                    { hasError ? <div> error... {dataErr} </div> : ""}
                </div>
            </div>
        );
    }

    return (
        <div>
            <SaveData />
        </div>
    );
}