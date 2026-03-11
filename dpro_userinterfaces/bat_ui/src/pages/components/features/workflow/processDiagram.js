import { useState, use, useContext } from 'react';
import { useProcessNodes, ProcessNodesContext } from '../workflow/processNodesContext.tsx';

const ProcessDiagram = (nodesObj) => {
    //const processNodes = useProcessNodes();
    const processNodes = nodesObj.nodes ? nodesObj.nodes : [{ process: <div></div>, action: <div></div> }];
    let stringOutput = nodesObj.nodes ? nodesObj.nodes : processNodes[0];
    console.log('process diagram: ' + stringOutput );

    if(processNodes === undefined){
        throw new Error('process nodes is undefined.');
    }

    let output2 = processNodes ? processNodes : '';
    let output3 = processNodes[0] ? processNodes[0].process : '';
    console.log('process nodes: ' + output2);
    console.log('diagram nodes: ' + output3);

     let processDiagramElement = (processNode, actionNode) => {
        return(
            <div className='w-full h-auto flex flex-col items-center justify-center'>
                { processNode }
                { actionNode }
            </div>
        );
    }

    let process = <div></div>;
    const processElements = processNodes.map( node => processDiagramElement(node.process, node.action));
    process = 
        <div className='w-full flex'>
            { processElements }
        </div>;

    return(
        <div className='w-full h-auto flex items-center justify-center'>
            <p className='text-lg text-black text-center'> Process Diagram </p>
            { process }
        </div>
    );
}
export default ProcessDiagram;