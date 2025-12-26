'use client';

import React, { useState, useEffect } from "react";

export default function DataValues(url) {
    const [dataValues, setDataValues] = useState();
    const [dataError, setDataError] = useState();
    const [hasData, setHasData] = useState(false);
 
    let isRetrieving = true;
    let isComplete, hasSent, hasReturnValue, hasError = false;

    let dataReturn, dataRows, dataErr; 

    async function retreiveData() {
        hasSent = true;
        try {
            isRetrieving = true;
            dataReturn = await fetch(url)
                                    .then((res) => res.json())
                                    .catch((e) => e.message);
            //setDataValues(dataReturn);
            setHasData(dataReturn !== undefined & dataReturn !== null);
        } catch(error){
            hasError = true;
            dataErr = error;
            setDataError(error.message);
        }
        
        isComplete = hasData || hasError;
        return hasError ? dataErr : dataReturn;
    }

    useEffect(() => {
            dataRows = retreiveData();
        }), ([!hasSent]);

    function TableData(){
        return (
            <div className='flex w-full h-screen mt-[4.5%] p-10 items-center justify-evenly'>
                <h1 className='text-2xl items-center'> Retrieve Data: </h1>
                <div className='flex flex-col text-lg items-center'>
                    { hasData ? <div> complete... data values:{dataValues}</div> : ""}
                    { isRetrieving && !hasData && !hasError ? "retrieving..." : "" }
                    { hasError ? <div> error... {dataErr}</div> : ""}
                </div>
            </div>
        );
    }
    return (
        <div>
            <TableData />
        </div>
    );
}