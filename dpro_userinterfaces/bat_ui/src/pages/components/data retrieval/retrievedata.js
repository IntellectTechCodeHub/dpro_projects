'use client';
import { useState } from "react";

async function retreiveData(url) {
    let [hasData, setHasData] = useState();
    let [dataError, setDataError] = useState();

    let dataReturn;
    let isRetrieving, hasError, dataErr, isComplete = false;    
    let hasSent = true;
        try {
            isRetrieving = true;
            dataReturn = await fetch(url)
                                    .then((res) => res.json())
                                    .catch((e) => e.message);
            console.log(dataReturn);
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

export default retreiveData;