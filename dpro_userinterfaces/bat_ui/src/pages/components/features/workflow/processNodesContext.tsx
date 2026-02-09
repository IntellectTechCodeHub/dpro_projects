'use client';

import { createContext, JSX, useContext } from 'react';
import { ReactNode } from 'react';

type processNodes = { process: JSX.Element, action: JSX.Element }[];
type ProcessContextType = {
    processNodesPromise: Promise<processNodes | null>;
};

export const ProcessNodesContext = createContext<ProcessContextType | null>(null);

export function useProcessNodes(): ProcessContextType {
    let context = useContext(ProcessNodesContext);
    if(context === null) {
        throw new Error('useProcessNodes is required to be within a ProcessNodesProvider.');
    }
    console.log(context.processNodesPromise);
    return context;
}

export const ProcessNodesProvider = ({ children, processNodesPromise}: {children: ReactNode; processNodesPromise: Promise<processNodes | null> }) => {
    return ( 
        <ProcessNodesContext.Provider value={ { processNodesPromise } }>
            { children }
        </ProcessNodesContext.Provider>
    );
}
export default ProcessNodesProvider;