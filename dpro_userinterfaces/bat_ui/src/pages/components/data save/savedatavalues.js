'use client';

import React, { useState, useEffect } from 'react';
import { formatUrl } from '../../../app/helpers/httputility.js';

const SaveDataValues = ({ type, url, data,  eventCallback }) => {
    const [saveDataValues, setSaveDataValues] = useState();
    const [saveDataError, setSaveDataError] = useState();
    const [saveHasData, setSaveHasData] = useState(false);
    
    let isSaving = true;
    let isComplete, hasSent, hasReturnValue, hasError = false;
    
    let dataReturn, dataResults, dataErr;

    let dataObject = data;

    console.log('type: ' + type);
    console.log('url: ' + url);
    console.log(eventCallback);

    function formatUrlString() {
        if(type !== undefined && url !== undefined && data !== undefined) {
            let urlString = formatUrl(type, url, dataObject);
            console.log("Formatter: " + urlString);
            return urlString;  
        }

        return 'invalid url';
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

            let dataComplete = false;
            dataReturn = await fetch(apiUrl, options)
                            .then((res) => res.json())
                            .catch((e) => e.message);
            
            setSaveHasData(dataReturn !== undefined && dataReturn !== null);
            //setSaveDataValues(dataReturn);
            
        }
        catch (error) {
            hasError = true;
            dataErr = error;
            setSaveDataError(error.message);
            
            if(eventCallback !== undefined)
                eventCallback();
        }
    }

    var serviceUrl = formatUrlString();

    useEffect(() => {
        dataResults = saveData(serviceUrl, dataObject);
    }), ([!hasSent]);

    let EventCallbackButton = (isActive) => {
        return(
            <div className="buttonDiv">
                <button name="Complete" type="button" onClick={ eventCallback } className="button" hidden={ !isActive }> Complete </button> <br />
            </div>
        );
    }

    function SaveData() {
        return(
            <div className='flex w-full h-screen mt-[4.5%] p-10 items-center justify-evenly bg-slate-300 rounded-lg'>
                <EventCallbackButton isActive={saveHasData} />
                
                <div className='flex flex-col text-lg items-center'>
                    <h1 className='text-2xl m-[2.5%] items-center semi-bold font-mono text-shadow-fuchsia-950'> Save Data </h1>
                    { saveHasData ? <div> Complete... {saveDataValues} </div> : ""}
                    { isSaving && !saveHasData && !hasError ? <div> Saving... </div> : "" }
                    { hasError ? <div> Error... {dataErr} </div> : ""}
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
export default SaveDataValues;