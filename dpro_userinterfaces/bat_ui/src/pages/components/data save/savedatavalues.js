'use client';

import React, { useState, useEffect } from 'react';
import { formatUrl } from '../../../app/helpers/httputility.js';

export default function SaveDataValues(type, url, data) {
    const [saveDataValues, setSaveDataValues] = useState();
    const [saveDataError, setSaveDataError] = useState();
    const [saveHasData, setSaveHasData] = useState(false);

    let isSaving = true;
    let isComplete, hasSent, hasReturnValue, hasError = false;
    
    let dataReturn, dataResults, dataErr;

    let dataObject = data;

    function formatUrlString() {
        let urlString = formatUrl(type, url, dataObject);
        console.log("Formatter: " +  urlString);
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

    var serviceUrl = formatUrlString();

    useEffect(() => {
        dataResults = saveData(serviceUrl, dataObject);
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